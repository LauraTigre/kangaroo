function validateNewFridayMorningSelected (fridayNewMorningSelected){
    if (typeof fridayNewMorningSelected !== 'boolean') throw new TypeError('fridayNewMorningSelected is not a boolean')
}
module.exports= validateNewFridayMorningSelected;