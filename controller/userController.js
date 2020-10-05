const { users } = require('../models')
const { decryptPwd } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jwt');

class UsersController {
    static async getAllUser (req, res, next) {
        try {
            const result = await users.findAll({
                order : [
                    ['id','ASC']
                ],
            })
            res.status(200).json(result)
        }
        catch (err) {
            next(err)
        }
    }
    static async getById (req, res, next) {
        const id = req.userData.id
        try {
            const result = await users.findOne({
                where: {
                    id
                }
            })
            if (result) {
                res.status(200).json(result)
            } else {
                res.send('user not found')
            }
        }
        catch (err) {
            next(err)
        }

    }
    static registerForm (req, res){
        res.render('/register.ejs')
    }
    static async addUsers (req,res,next) {
        const { fullname, email, password} = req.body
        try {
            const found = await users.findOne({
                where: {
                     email 
                }
            })
            if (found) {
                res.send('email already exist, please login')
                // res.redirect('/login.ejs')
            }else {
                const user = await users.create({
                    fullname,email,password
                })
                res.status(200).json(user)
            }
        }catch(err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await users.findOne({
                where: { email }
            })
            if (user) {
                if (decryptPwd(password, user.password)) {
                    const access_token = tokenGenerator(user)
                    res.status(200).json({ access_token });
                } else {
                    res.status(400).json("Wrong Password!")
                }
            } else {
                res.status(404).json("User not found!")
            }
        } catch (err) {
            next (err)
        }
    }

    static async editUsers (req, res, next) {
        const id = req.userData.id;
        const { fullname, image } = req.body;

        try {
            const result = await users.update({
                fullname,
                image
            }, {
                where: { id }
            });
            res.status(200).json(result);
        } catch (err) {
            next (err)
        }
    }

    static async deleteUsers (req, res, next) {
        const id =req.userData.id;

        try {
            const result = await users.destroy({
                where: { id }
            });
            res.status(200).json("User deleted!");
        } catch (err) {
            next (err)
        }
    }
}

module.exports = UsersController