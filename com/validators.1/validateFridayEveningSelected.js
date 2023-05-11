function validateFridayEveningSelected (fridayEveningSelected){
    if (typeof fridayEveningSelected !== 'boolean') throw new TypeError('fridayEveningSelected is not a boolean')
}
module.exports= validateFridayEveningSelected;