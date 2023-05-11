function validateNewTuesdayMorningSelected (tuesdayNewMorningSelected){
    if (typeof tuesdayNewMorningSelected !== 'boolean') throw new TypeError('tuesdayNewMorningSelected is not a boolean')
}
module.exports= validateNewTuesdayMorningSelected;