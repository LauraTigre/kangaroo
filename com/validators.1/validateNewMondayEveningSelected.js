function validateNewMondayEveningSelected (mondayNewEveningSelected){
    if (typeof mondayNewEveningSelected !== 'boolean') throw new TypeError('mondayNewEveningSelected is not a boolean')
}
module.exports= validateNewMondayEveningSelected