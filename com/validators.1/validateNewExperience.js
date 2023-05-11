function validateNewExperience(newExperience){
    if (typeof newExperience !== 'number') throw new TypeError('newExperience is not a number')
}
module.exports= validateNewExperience