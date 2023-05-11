function validateNewPassword(NewPassword){
    if (typeof NewPassword !== 'string') throw new TypeError('NewPassword is not a string')
    if (NewPassword.length < 8) throw new RangeError('NewPassword is shorter than 8 characters')

}
module.exports= validateNewPassword