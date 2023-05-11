function validateNewWendsdayEveningSelected (wendsdayNewEveningSelected){
    if (typeof wendsdayNewEveningSelected !== 'boolean') throw new TypeError('wendsdayNewEveningSelected is not a boolean')
}
module.exports= validateNewWendsdayEveningSelected;