const { movies } = require('../models/movies')

class MovieController {
    static async getMovie (req, res, next) {
        try {
            const result = await movies.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async addMovie (req, res, next) {
        const { title, synopsis, trailer, poster, category, release_date, director, featured_song, budget } = req.body;

        try {
            const found = await movies.findOne({
                where: {
                    title
                }
            })
            if (found) {
                res.status(409).json({
                    msg : "Title already exist, try another title."
                })
            } else {
                const movie = await movies.create({
                    title, synopsis, trailer, poster, category, release_date, director, featured_song, budget
                })
                res.status(201).json(movie)
            }
        } catch (err) {
            next(err)
        }
    }
    
    static async UpdateMovie(req,res, next) {
        const { title, synopsis, trailer, poster, category, release_date, director, featured_song, budget } = req.body
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
                    poster, 
                    category,
                    release_date, 
                    director, 
                    featured_song, 
                    budget
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
    static async deleteMovie(req,res,next) {
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

    static async findById (req, res, next) {
        const id = req.params.id;

        try {
            const result = movies.findOne({
                where : { id }
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async findCategory (req, res, next) {
        const { category } = req.body;

        try {
            const result = movies.findAll({
                where : { category }
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
module.exports = MovieController