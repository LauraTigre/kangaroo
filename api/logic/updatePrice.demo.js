const { connect, disconnect } = require('mongoose')
const updatePrice = require('./updatePrice')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updatePrice('6425b3f3ebf9861379006371',15)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
