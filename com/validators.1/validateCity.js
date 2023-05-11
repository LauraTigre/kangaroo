function validateCity (city){
    if (typeof city !== 'string') throw new TypeError('city is not a string')
}
module.exports= validateCity