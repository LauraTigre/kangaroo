function validatedateOfBirth(dateOfBirth){

    if (typeof dateOfBirth !== 'string') throw new TypeError('age is not a string')

}
module.exports= validatedateOfBirth