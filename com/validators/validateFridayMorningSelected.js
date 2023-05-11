function validateFridayMorningSelected (fridayMorningSelected){
    if (typeof fridayMorningSelected !== 'boolean') throw new TypeError('fridayMorningSelected is not a boolean')
}
module.exports= validateFridayMorningSelected;