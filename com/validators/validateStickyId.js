

function validateStickyId(stickyId){
    if (typeof stickyId !== 'string') throw new TypeError('stickyId is not a string')
}
module.exports= validateStickyId