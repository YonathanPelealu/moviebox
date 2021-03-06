const { movies, reviews, users } = require('../models')
const { Op } = require('sequelize')


class MovieController {
    static async getMovie (req, res, next) {
        const page = req.params.page

        try {
            const result = await movies.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })

            const options = {
                page, // Default 1
                paginate: 10, // Default 25
              }
            const { docs, pages, total } = await movies.paginate(options)
            if (page > pages){
                res.status(404).json({
                    msg : "page not found"
                })
            } else {
                res.status(200).json(docs)
            }
        } catch (err) {
            next(err)
        }
    }
    static async addMovie (req, res, next) {
        const { title, synopsis,trailer, category, release_date, director, featured_song, budget } = req.body;
        const poster = req.file.path
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
    static async addBackdrop (req, res, next){
        const id = req.params.id
        const backdrop = req.file.path
        try {
            const result = await movies.update(
                { backdrop },
                    { where: { id }}
                );
                res.status(200).json(result);
            }
        catch (err) {
            next(err)
        }
    }
    static async findById (req, res, next) {
        const id = req.params.id;

        try {
            const result = await movies.findOne({
                where : { 
                    id 
                } 
            })
            if (result){
                const rating = await reviews.findAll({
                    where : { 
                        movieId : id
                    }
                })
                //rata-rata rate
                let temp = 0
                rating.forEach(el => {
                    temp += el.rate
                });
                const Review = rating.length
                const rate = temp/Review
                res.status(200).json({
                    average_rating : rate,
                    Total_Review : Review,
                    Movie : result
                })
            } else {
                res.status(404).json({
                msg : 'Movie not found'
                })
            }
        } catch (err) {
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
        const { title, synopsis, trailer, category, release_date, director, featured_song, budget } = req.body;
        const id = req.params.id
        const { poster, backdrop }= req.file.path
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
    static async search(req, res, next){
        const { search } = req.body;
        try {             
            const found = await Movie.findAll({                 
                where: {                     
                    title: {                         
                        [Op.like]: '%' + search + '%'                     
                    }                 
                }             
            });             
            if(found){                 
                res.status(201).json(found);             
            } else {                 
                res.status(409).json({                     
                    msg: "Movie is not available!"                 
                });             
            }              
        }
        catch (err) {
            next (err);
        }
    }
}
module.exports = MovieController