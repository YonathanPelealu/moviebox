const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

const router = require('./routes')
const errorHandling = require ('./middlewares/errorHandling')

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(router)
app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})