function validateExperience(experience){
    if (typeof experience !== 'number') throw new TypeError('experience is not a number')
}
module.exports= validateExperience