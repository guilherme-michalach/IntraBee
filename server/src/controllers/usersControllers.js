const { User } = require("../models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");

async function createUser(req, res, next) {
    const { name, email, password } = req.body;
    const file = req.file;

    let avatar;
    if (file) {
        avatar = `${process.env.APP_URL}/images/${file.filename}`
    }

    try {
        const [user, created] = await User.findOrCreate({
            where: { email: email.toLowerCase() },
            defaults: { name, password, avatar }
        });

        if (!created) {
            
            if (file) {
                fs.unlinkSync(path.resolve(__dirname, "..", "..", "uploads", file.filename));
            }

            throw new createHttpError(409, "E-mail já cadastrado");
        }

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createUser
}