function validateNewWendsdayAfternoonSelected (wendsdayNewAfternoonSelected){
    if (typeof wendsdayNewAfternoonSelected !== 'boolean') throw new TypeError('wendsdayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewWendsdayAfternoonSelected;