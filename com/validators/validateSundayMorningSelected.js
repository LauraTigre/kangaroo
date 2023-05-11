function validateSundayMorningSelected (sundayMorningSelected){
    if (typeof sundayMorningSelected !== 'boolean') throw new TypeError('sundayMorningSelected is not a boolean')
}
module.exports= validateSundayMorningSelected;