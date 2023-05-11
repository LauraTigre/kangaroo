const { connect, disconnect } = require('mongoose')
const retrieveChat = require('./retrieveChat')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return retrieveChat('641adfcbd2e17978d7935e92','642313b0c162f4b182a9894b')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())