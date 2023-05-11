const isEmail = require('../checkers/isEmail')
const {FormatError} = require('../errors/FormatError')

function validateNewEmail(newEmail){

    if (typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
    if (!isEmail(newEmail)) throw new FormatError('newEmail is not an email')
}

module.exports= validateNewEmail