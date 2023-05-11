const { connect, disconnect } = require('mongoose')
const registerNanny = require('./registerNanny')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return registerNanny('Laura Tigre 2', 'Barcelona', 8, 'lauratigre2@gmail.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
