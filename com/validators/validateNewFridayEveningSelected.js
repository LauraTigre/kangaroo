function validateNewFridayEveningSelected (fridayNewEveningSelected){
    if (typeof fridayNewEveningSelected !== 'boolean') throw new TypeError('fridayNewEveningSelected is not a boolean')
}
module.exports= validateNewFridayEveningSelected;