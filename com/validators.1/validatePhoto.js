function validatePhoto (photo){
    if (typeof photo !== 'string') throw new TypeError('photo is not a string')
}
module.exports= validatePhoto