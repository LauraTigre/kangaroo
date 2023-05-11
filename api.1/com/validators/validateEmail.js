const isEmail = require('../checkers/isEmail')
const {FormatError} = require('../errors/FormatError')

function validateEmail(email){

    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!isEmail(email)) throw new FormatError('email is not an email')
}

module.exports= validateEmail