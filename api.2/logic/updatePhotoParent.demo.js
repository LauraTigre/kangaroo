const { connect, disconnect } = require('mongoose')
const updatePhotoParent = require('./updatePhotoParent')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updatePhotoParent('641ae08f39ec536dfed3549a','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ74BW3PKmmXyLyO50Oc5SsO1N-Qi42kw8Mw&usqp=CAU')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
