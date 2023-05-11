function validateParentId(userParentId) {
    if (typeof userParentId !== 'string') throw new TypeError('userParentId is not a string')
}
module.exports= validateParentId