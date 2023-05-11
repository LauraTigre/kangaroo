function validateWendsdayEveningSelected (wendsdayEveningSelected){
    if (typeof wendsdayEveningSelected !== 'boolean') throw new TypeError('wendsdayEveningSelected is not a boolean')
}
module.exports= validateWendsdayEveningSelected;