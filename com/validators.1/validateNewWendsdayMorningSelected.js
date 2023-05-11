function validateNewWendsdayMorningSelected (wendsdayNewMorningSelected){
    if (typeof wendsdayNewMorningSelected !== 'boolean') throw new TypeError('wendsdayNewMorningSelected is not a boolean')
}
module.exports= validateNewWendsdayMorningSelected;