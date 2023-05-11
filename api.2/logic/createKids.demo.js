const { connect, disconnect } = require('mongoose')
const createKids = require('./createKids')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {

        return createKids('641adfcbd2e17978d7935e92', 'Pancho', new Date('2021-05-05'))
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
