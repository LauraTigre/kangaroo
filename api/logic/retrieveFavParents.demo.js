const { connect, disconnect } = require('mongoose')
const retrieveFavParents = require('./retrieveFavParents')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return retrieveFavParents('64253f9855fc63a23e0b6d7d')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

