const { connect, disconnect } = require('mongoose')
const chat = require('./chat')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {

        return chat('641ae1668303ba8fbeeee337','641ae08f39ec536dfed3549a','Hello')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
