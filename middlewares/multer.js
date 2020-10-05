const multer = require('multer');

const fileFilterImage = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const storageCast = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/casts');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploadCast = multer({
    storage: storageCast,
    fileFilter: fileFilterImage
});

module.exports = {
    uploadCast
}



// const { search } = req.body;
//         try {
//             const found = await Movie.findAll({
//                 where: {
//                     title: {
//                         [Op.like]: '%' + search + '%'
//                     }
//                 }
//             });
//             if(found){
//                 res.status(201).json(found);
//             } else {
//                 res.status(409).json({
//                     msg: "Movie is not available!"
//                 });
//             }

//             // const found = await Movie.findAll({
//             //     where : {
//             //         title: search
//             //     }
//             // })
//             // res.status(201).json(found);
//             //console.log(found);

//         } catch (err) {
//             next (err);
//         }


