const jwt = require('jsonwebtoken')
const secretKey = "bebas"


const tokenGenerator = (user) => {
    const { id,username,password } = user
    return jwt.sign({
        id,
        username,
    }, secretKey)
}

const tokenVerifier = (access_token) => {
    return jwt.verify(access_token,secretKey)
}

module.exports = {
    tokenGenerator, tokenVerifier
}