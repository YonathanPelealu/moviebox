const { users } = require('../models')
const {decryptPwd} = require('../helpers/bcrypt')
const{tokenGenerator} = require('../helpers/jwt')

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
    static async register (req,res,next) {
        const { fullname, email,password} = req.body
        try {
            const found = await users.findOne({
                where: {
                     email 
                }
            })
            if (found) {
                res.send('email already exist, please login')
            }else {
                const user = await users.create({
                    fullname,email,password
                })
                const access_token = tokenGenerator(user)
                res.status(200).json({access_token})
            }
        }catch(err) {
            next(err)
        }
    }
    static async login (req, res, next) {
        const { email,password } = req.body
        try {
            const user = await users.findOne({
                where: {
                    email
                }
            })
            if (user) {
                if(decryptPwd(password, user.password)){

                    const access_token = tokenGenerator(user)
                    res.status(200).json({access_token})
                }else{
                    res.status(404).json({
                        msg : "password not correct"
                    })
                }
            }
            }
            catch (err) {
                res.status(500).json({err})
            }
    }
}
module.exports = UsersController