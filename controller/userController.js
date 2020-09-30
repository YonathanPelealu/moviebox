const { users } = require('../models')

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
        const id = req.params.id
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
        const { fullname, email,password} = req.body
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
}

module.exports = UsersController