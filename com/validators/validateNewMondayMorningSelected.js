function validateNewMondayMorningSelected (mondayNewMorningSelected){
    if (typeof mondayNewMorningSelected !== 'boolean') throw new TypeError('mondayNewMorningSelected is not a boolean')
}
module.exports= validateNewMondayMorningSelected;