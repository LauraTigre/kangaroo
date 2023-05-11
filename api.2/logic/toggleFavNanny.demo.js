const {connect, disconnect} = require('mongoose')
const toggleFavNanny = require('./toggleFavNanny')

connect('mongodb://127.0.0.1:27017/mydb')
.then(() => {

    return toggleFavNanny('641224a5797d14a3582b0f9e','641221e4e958dabcabc53809')
})
.then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())