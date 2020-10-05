const { movies } = require('../models')

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
            // res.status(500).json(err)
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
            // res.status(500).json(err)
            next(err)
        }
    }

    static async findById (req, res, next) {
        const id = req.params.id;

        try {
            const result = await movies.findOne({
                where : { id }
            })
            res.status(200).json(result)
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }

    static async findCategory (req, res, next) {
        const {category}  = req.body;
        try {
            const result = await movies.findAll({
                
                where : { category }
            })
            if (result) {
                res.status(200).json(result)    
            }
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
    
    static async UpdateMovie(req,res, next) {
        const { title, synopsis, trailer, poster, category, release_date, director, featured_song, budget } = req.body;
        const id = req.params.id
        try {
            const found = await movies.findOne({
                where: { title }
            });
            if (found) {
                res.status(409).json("Title already exist!, try another Title");
            } else {
                const result = await movies.update({
                    title, synopsis, trailer, poster, category, release_date, director, featured_song, budget},
                    { where: { id }
                });
                res.status(200).json(result);
            }
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }

    static async deleteMovie(req, res, next) {
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
            // res.status(500).json(err)
            next(err)
        }
    }

   
}
module.exports = MovieController