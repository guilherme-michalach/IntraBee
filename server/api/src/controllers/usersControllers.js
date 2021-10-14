const { User } = require("../db/models");
const createHttpError = require("http-errors");

async function createUser(req, res, next) {
    const { name, email, password, phone } = req.body;

    try {
       const [user, created] = await User.findOrCreate({
           where: { email },
           defaults: { name, password, phone }
       });

       if (!created) {
           throw new createHttpError(409, "E-mail já cadastrado!");
       }

       res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUser(req, res, next) {
    const { userId } = res.locals;

    try {
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        return res.json(user); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const allUsers = await User.findAll();

        return res.json(allUsers);
    } catch (error) {
        console.log(error);
        next(error); 
    }
}

async function deleteUser(req, res, next) {
    const { userId } = res.locals;

    try {
        const userToDelete = await User.findOne({ where: {id: userId }});

        if(!userToDelete) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        await userToDelete.destroy();
        
        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function changePassword(req, res, next) {
    const { userId } = res.locals;
    const { password } = req.body;

    try {
        const user = await User.findOne({ where: { id: userId }});

        if (!user) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        user.password = password;

        await user.save();

        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    deleteUser,
    changePassword
}