const createHttpError = require("http-errors");
const { User } = require("../db/models");
const jwt = require("jsonwebtoken");

function createAccessToken() {
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

        const registeredUser = await User.findOne({ where: { email } });

        if (!registeredUser) {
            throw new createHttpError(401, "E-mail ou senha inválidos");
        }

        const isPasswordValid = registeredUser.isPasswordValid(password);

        if (!isPasswordValid) {
            throw new createHttpError(401, "E-mail ou senha inválidos");
        }

        const accesToken = createAccessToken(registeredUser.id);

        res.json(accesToken)
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login
}