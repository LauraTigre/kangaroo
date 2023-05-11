function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
}

module.exports = validateToken