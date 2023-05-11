const {CoherenceError} = require('../errors/CoherenceError')
function validateColor(color){
    if (typeof color !== 'string') throw new TypeError('color is not a string')
    if (color !== 'red' && color !== 'blue'&& color !== 'green'&& color !== 'yellow' ) throw new CoherenceError('color value is invalid')

}

module.exports= validateColor