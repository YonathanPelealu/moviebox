const { reviews } = require('../models')

class reviewController {
    static async addReview (req, res, next) {
        const { userId , movieId, review, rate } = req.body
        try {
            const foundMovie = await reviews.findAll({
                where: { 
                    movieId, userId
                } 
            })
            if (foundMovie.length > 0) {
                res.status(400).json({
                    msg : "user already gave review"
                })
            } else {
                const movie = await reviews.create({
                    userId , movieId, review, rate
                })
                res.status(201).json(movie)
            }
        } catch (err) {
            next(err)        
        }
    }
    static async getAllReview (req, res,next) {
        try {
            const review = await reviews.findAll({
                order : [
                    ['id','ASC']
                ],
            })
            res.status(200).json(review)
        }
        catch (err) { 
            next(err)
        }    
    }
    static async getAllByUserId (req, res, next) {
        const id = req.params.id
        try {
            const userReview = await reviews.findAll({
                where: {
                    userId : id
                },
                order: [
                    ['id','ASC']
                ],
            })
            res.status(200).json(userReview)
        }
        catch (err) {
            next(err)
        }
    }
    static async getAllByMovieId (req, res, next) {
        const id = req.params.id
        try {
            const userReview = await reviews.findAll({
                where: {
                    movieId : id
                },
                order: [
                    ['id','ASC']
                ],
            })
            res.status(200).json(userReview)
        }
        catch (err) {
            next(err)
        }
    }
    static async deleteReview (req, res, next) {
        const id = req.params.id

        try {
            const result = reviews.destroy({
                where :{ id }
            })
            res.status(200).json({
                result,
                msg: "Review deleted"
            })
        }catch (err) {
            next(err)
        }
    }
    static async updateReview (req, res, next) {
        const id = req.params.id
        const {review,rate} = req.body
        try {
                const update = await reviews.update 
                    (
                        {
                            review,
                            rate,
                        },
                        {
                            where: { id },
                        }
                    )             
                    res.status(200).json({
                        update,
                        msg: "Review updated"
                    })
                      
        }
        catch (err) {
            next(err)
        }
    }
}
module.exports = reviewController