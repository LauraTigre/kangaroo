function validateTuesdayMorningSelected (tuesdayMorningSelected){
    if (typeof tuesdayMorningSelected !== 'boolean') throw new TypeError('tuesdayMorningSelected is not a boolean')
}
module.exports= validateTuesdayMorningSelected;