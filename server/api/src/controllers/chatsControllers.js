const { Chat, User, sequelize } = require("../db/models");
const createHttpError = require("http-errors");
const { QueryTypes } = require("sequelize");

async function createChat (req, res, next) {
    const { name, users } = req.body;

    const transaction = await sequelize.transaction();

    try {
        const registeredUsers = await User.findAll({ where: { id: users } });

        if(!registeredUsers) {
            throw new createHttpError(404, "Usuários não cadastrados!");
        };

        const chat = await Chat.create({ name });

        await chat.addUsers(registeredUsers);

        transaction.commit();

        res.status(201).json(chat);
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        next(error);
    }
}

async function getChats (req, res, next) {
    const userId = res.locals.userId;

    try {
        const chats = await sequelize.query(`
            SELECT
                c.id,
                c.name
            FROM 
                chats c
            INNER JOIN 
                users_chats uc
            ON
                uc.chat_id = c.id
            INNER JOIN
                users u
            ON
                u.id = uc.user_id
            WHERE
                u.id = ?;
        `, { 
            replacements: [userId],
            type: QueryTypes.SELECT 
        });

        for (let chat of chats) {
            const users = await sequelize.query(`
                SELECT
                    u.name,
                    u.email
                FROM
                    users u
                INNER JOIN
                    users_chats uc
                ON
                    uc.user_id = u.id
                WHERE
                    uc.chat_id = ?;
            `, { 
                replacements: [chat.id],
                type: QueryTypes.SELECT 
            });

            chat.users = users;
        }

        res.json(chats);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createChat,
    getChats
}