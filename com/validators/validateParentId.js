function validateParentId(ParentId) {
    if (typeof ParentId !== 'string') throw new TypeError('ParentId is not a string')
}
module.exports= validateParentId