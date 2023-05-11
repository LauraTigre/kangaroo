const { connect, disconnect } = require('mongoose')
const registerParent = require('./registerParent')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return registerParent('Pili Gonzalez', 'Barcelona', 'pili@gonzalez.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
