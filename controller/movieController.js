const { movies } = require('../models/movies')

class MovieController {
    static async getMovie (req, res) {
        try {
            const result = await Movies.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(result)
        } catch (err) {
            req.status(500).json(err)
        }
    }

    static addMovieForm(req, res) {
        // res.render("addProducts.ejs");
        res.send("add movie page")
	}

    static async addMovie (req, res) {
        const { title, synopsis, trailer, poster } = req.body;

        try {
            const found = await Movies.findOne({
                where: {
                    title
                }
            })
            if (found) {
                res.status(409).json({
                    msg : "Title already exist, try another title."
                })
            } else {
                const movie = await Movies.create({
                    title, synopsis, trailer, poster
                })
                res.status(201).json(movie)
            }
        } catch (err) {
            req.status(500).json(err)
        }
    }
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