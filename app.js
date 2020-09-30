const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

const router = require('./routes')

//MIDDLEWARES

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(router)

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})