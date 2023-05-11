
const {connect, disconnect} = require('mongoose')
const toggleFavParent = require('./toggleFavParent')

connect('mongodb://127.0.0.1:27017/kangaroo')
.then(() => {

    return toggleFavParent('641adfcbd2e17978d7935e93','641adfcdd2e17978d7935e97')
})
.then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())