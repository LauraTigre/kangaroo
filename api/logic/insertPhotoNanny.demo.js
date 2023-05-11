const { connect, disconnect } = require('mongoose')
const insertPhotoNanny = require('./insertPhotoNanny')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return insertPhotoNanny('641eb7a27a5efb22327ca57a','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkTXYRMn_0y2iUc1iDyazEY11esvQL247MA&usqp=CAU')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())