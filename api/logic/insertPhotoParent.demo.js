const { connect, disconnect } = require('mongoose')
const insertPhotoParent = require('./insertPhotoParent')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return insertPhotoParent('641eb7ec7a5efb22327ca595','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdGbxAFskOiUK9qagfsvoKCDH9869XvJFYg&usqp=CAU')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())