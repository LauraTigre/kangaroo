const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateUserPassword('')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
