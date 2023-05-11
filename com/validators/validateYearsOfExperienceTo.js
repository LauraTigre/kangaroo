function validateYearsOfExperienceTo(yearsOfExperienceTo){

    if (typeof yearsOfExperienceTo !== 'number') throw new TypeError('years is not a number')
    if (yearsOfExperienceTo <= 0) throw new Error('years must be greater than 0')

}
module.exports= validateYearsOfExperienceTo