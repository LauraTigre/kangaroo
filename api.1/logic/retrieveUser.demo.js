const { connect, disconnect } = require('mongoose')
const retrieveUser = require('./retrieveUser')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
    

        return retrieveUser('640cde25b9f60742b315bc6c')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

