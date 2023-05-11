function validateNewPasswordConfirm(newPasswordConfirm){
    if (typeof newPasswordConfirm !== 'string') throw new TypeError('newPasswordConfirm is not a string')
    if (newPasswordConfirm.length < 8) throw new RangeError('newPasswordConfirm is shorter than 8 characters')

}
module.exports= validateNewPasswordConfirm