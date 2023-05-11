function validateTuesdayEveningSelected (tuesdayEveningSelected){
    if (typeof tuesdayEveningSelected !== 'boolean') throw new TypeError('tuesdayEveningSelected is not a boolean')
}
module.exports= validateTuesdayEveningSelected;