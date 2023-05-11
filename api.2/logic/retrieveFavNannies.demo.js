const { connect, disconnect } = require('mongoose')
const retrieveFavNannies = require('./retrieveFavNannies')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {

        return retrieveFavNannies('641ae08f39ec536dfed35499')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

