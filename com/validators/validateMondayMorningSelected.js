function validateMondayMorningSelected (mondayMorningSelected){
    if (typeof mondayMorningSelected !== 'boolean') throw new TypeError('mondayMorningSelected is not a boolean')
}
module.exports= validateMondayMorningSelected;