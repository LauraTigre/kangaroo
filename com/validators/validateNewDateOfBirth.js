function validateNewDateOfBirth(newDateOfBirth){

    if (!(newDateOfBirth instanceof Date)) throw new TypeError('new dateOfBirth is not a date')

}
module.exports= validateNewDateOfBirth