function validateWendsdayAfternoonSelected (wendsdayAfternoonSelected){
    if (typeof wendsdayAfternoonSelected !== 'boolean') throw new TypeError('wendsdayAfternoonSelected is not a boolean')
}
module.exports= validateWendsdayAfternoonSelected;