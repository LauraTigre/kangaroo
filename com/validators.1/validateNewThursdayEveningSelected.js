function validateNewThursdayEveningSelected (thursdayNewEveningSelected){
    if (typeof thursdayNewEveningSelected !== 'boolean') throw new TypeError('thursdayNewEveningSelected is not a boolean')
}
module.exports= validateNewThursdayEveningSelected;