function validateNewTuesdayEveningSelected (tuesdayNewEveningSelected){
    if (typeof tuesdayNewEveningSelected !== 'boolean') throw new TypeError('tuesdayNewEveningSelected is not a boolean')
}
module.exports= validateNewTuesdayEveningSelected;