function validateSundayEveningSelected (sundayEveningSelected){
    if (typeof sundayEveningSelected !== 'boolean') throw new TypeError('sundayEveningSelected is not a boolean')
}
module.exports= validateSundayEveningSelected;