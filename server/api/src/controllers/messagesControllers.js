const { Message, Chat, sequelize } = require("../db/models");
const createHttpError = require("http-errors");
const { QueryTypes } = require("sequelize");

async function sendMessages (req, res, next) {
    const userId = res.locals.userId;
    
    const { message, chatId } = req.body;
    
    try {
        const chat = await Chat.findOne({ where: { id: chatId }, include: "users" });
    
        if (!chat) {
            throw new createHttpError(404, "Chat não encontrado!");
        }
        
        const usersInChat = chat.users.find(user => user.id === userId);

        if (!usersInChat) {
            throw new createHttpError(400, "O usuário não faz parte desse chat!");
        }

        const newMessage = await Message.create({ message, user_id: userId, chat_id: chatId });

        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getMessages (req, res, next) {
    const userId = res.locals.userId;

    const chatId = req.params.id;

    try {
        const chat = await Chat.findOne({ where: { id: chatId }, include: "users" });
    
        if (!chat) {
            throw new createHttpError(404, "Chat não encontrado!");
        }
        
        const usersInChat = chat.users.find(user => user.id === userId);

        if (!usersInChat) {
            throw new createHttpError(400, "O usuário não faz parte desse chat!");
        }

        const messages = await sequelize.query(`
            SELECT
                m.id,
                m.message,
                u.id as "userId",
                u.name,
                m.created_at as "createdAt"
            FROM 
                messages m
            INNER JOIN 
                users u
            ON
                m.user_id = u.id
            WHERE
                m.chat_id = ?;
        `, { 
            replacements: [chatId],
            type: QueryTypes.SELECT 
        });

        res.json(messages);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    sendMessages,
    getMessages
}