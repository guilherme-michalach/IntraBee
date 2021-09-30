const createHttpError = require("http-errors");
const { User } = require("../db/models");
const jwt = require("jsonwebtoken");

function createAccessToken(userId) {
    return jwt.sign(
        { sub: userId },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    return token;
}

async function login(req, res, next) {
    const { email, password } = req.body;

    const err = new createHttpError(400, "E-mail ou senha inválidos!");

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw err;
        }

        if (!user.isPasswordValid(password)) {
            throw err;
        }

        const accessToken = createAccessToken(user.id);

        res.json(accessToken);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login
}