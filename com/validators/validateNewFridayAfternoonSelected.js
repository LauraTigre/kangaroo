function validateNewFridayAfternoonSelected (fridayNewAfternoonSelected){
    if (typeof fridayNewAfternoonSelected !== 'boolean') throw new TypeError('fridayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewFridayAfternoonSelected;