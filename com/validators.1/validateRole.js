function validateRole (role){
    if (typeof role !== 'string') throw new TypeError('role is not a string')
}
module.exports= validateRole