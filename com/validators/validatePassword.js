function validatePassword(password){
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.length < 8) throw new RangeError('password is shorter than 8 characters')

}
module.exports= validatePassword