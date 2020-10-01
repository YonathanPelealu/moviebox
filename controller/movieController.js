const { movies } = require('../models/movies')

class MovieController {
    static async UpdateMovieForm(req,res,next){
        const id = req.params.id
        try {
            const found = await movies.findOne({
                where : {
                    id
                }
            })
            if (found) {
                res.send({movies : found})
            }
        }
        catch (err){
            next(err)
        }

    }
    static async UpdateMovie(req,res, next) {
        const { title, synopsis, trailer } = req.body
        const UserId = req.movies.id
        try {
            const found = await movies.findOne({ 
                where : { id }
            })
            if (found) {
                movies.update({
                    title,
                    synopsis,
                    trailer,
                    poster
                })
            } else {
                res.send('Movie cannot updated')
            }
            
            res.status(201).json({
                msg : "Movies Updated"
            })
        } catch (err) {
            next(err)
    }
    }
    static async deleteMovie(reeq,res,next) {
        const id = req.params.id

        try {
            const result = movies.destroy({
                where :{ id }
            })
            res.status(200).json({
                result,
                msg: "Movie deleted"
            })
        }catch (err) {
            next(err)
        }
    }
}
module.exports = MovieController