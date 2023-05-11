const { connect, disconnect } = require('mongoose')
const retrieveChats = require('./retrieveChats')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return retrieveChats('641ae08f39ec536dfed3549a')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())