const { Usuario } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");

async function createUser(req, res, next) {
    const { nome, email, senha, telefone, cargo } = req.body;

    try {
        const [user, created] = await Usuario.findOrCreate({
            where: { email: email.toLowerCase() },
            defaults: { nome, senha, telefone, cargo }
        });

        if (!created) {
            throw new createHttpError(409, "Usuário já existe");
        }

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUser(req, res, next) {
   const { userId } = res.locals;

    try {
        const user = await Usuario.findOne({ where: { id: userId } });

        if (!user) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        return res.json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    createUser,
    getUser
}