const createHttpError = require("http-errors");
const { Usuario } = require("../db/models");
const jwt = require("jsonwebtoken");

function createAccessToken(sub) {
    const token = jwt.sign(
        { sub },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    return token;
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        const registeredUser = await Usuario.findOne({ where: { email } });

        if (!registeredUser) {
            throw new createHttpError(401, "E-mail ou senha inválidos");
        }

        const isPasswordValid = registeredUser.senhaValida(password);

        if (!isPasswordValid) {
            throw new createHttpError(401, "E-mail ou senha inválidos");
        }

        const accessToken = createAccessToken(registeredUser.id);

        res.json(accessToken)
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login
}