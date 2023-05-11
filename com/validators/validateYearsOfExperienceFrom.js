function validateYearsOfExperienceFrom(yearsOfExperienceFrom){

    if (typeof yearsOfExperienceFrom !== 'number') throw new TypeError('years is not a number')
    if (yearsOfExperienceFrom <= 0) throw new Error('years must be greater than 0')

}
module.exports= validateYearsOfExperienceFrom