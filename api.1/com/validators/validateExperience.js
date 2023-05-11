function validateExperience(experience){
    if (typeof experience !== 'string') throw new TypeError('experience is not a string')
}
module.exports= validateExperience