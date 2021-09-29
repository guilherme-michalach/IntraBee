const { Chat, Usuario } = require("../db/models");
const createHttpError = require("http-errors");

async function createChat (req, res, next) {
    const { name, users } = req.body;

    try {
        const registeredUsers = await Usuario.findAll({ where: { id: users } });

        if(!registeredUsers) {
            throw new createHttpError(404, "Usuários não cadastrados!");
        };

        const chat = await Chat.create({ name });

        await chat.addUsers(registeredUsers);

        res.status(201).json(chat);

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getChats () {}

module.exports = {
    createChat,
    getChats
}