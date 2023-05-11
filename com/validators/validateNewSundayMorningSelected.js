function validateNewSundayMorningSelected (sundayNewMorningSelected){
    if (typeof sundayNewMorningSelected !== 'boolean') throw new TypeError('sundayNewMorningSelected is not a boolean')
}
module.exports= validateNewSundayMorningSelected;