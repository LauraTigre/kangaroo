const {connect, disconnect} = require('mongoose')
const authenticateUser = require('./authenticateUser')


connect('mongodb://127.0.0.1:27017/kangaroo')

.then(() => {

    return authenticateUser('lauratigre@gmail.com','123123123')
})
.then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


module.exports= authenticateUser