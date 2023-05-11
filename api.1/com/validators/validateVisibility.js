const {ValueError} = require('../errors/ValueError')

function validateVisibility(visibility){
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (visibility !== 'public' && visibility !== 'private') throw new ValueError('visibility value is invalid')

}

module.exports= validateVisibility