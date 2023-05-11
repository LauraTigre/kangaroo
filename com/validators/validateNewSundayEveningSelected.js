function validateNewSundayEveningSelected (sundayNewEveningSelected){
    if (typeof sundayNewEveningSelected !== 'boolean') throw new TypeError('sundayNewEveningSelected is not a boolean')
}
module.exports= validateNewSundayEveningSelected;