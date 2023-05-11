const { connect, disconnect } = require('mongoose')
const retrieveNannies = require('./retrieveNannies')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return retrieveNannies('641adfcbd2e17978d7935e92')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())