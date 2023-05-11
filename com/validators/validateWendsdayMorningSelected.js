function validateWendsdayMorningSelected (wendsdayMorningSelected){
    if (typeof wendsdayMorningSelected !== 'boolean') throw new TypeError('wendsdayMorningSelected is not a boolean')
}
module.exports= validateWendsdayMorningSelected;