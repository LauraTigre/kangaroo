function validatePresentation(presentation){
    if (typeof presentation !== 'string') throw new TypeError('presentation is not a string')
}
module.exports= validatePresentation