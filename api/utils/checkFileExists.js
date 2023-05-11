const {access, constants} = require('fs')

function checkFileExists(filePath, callback){
    access(filePath, constants.F_OK, error=>{

        if (error){
            callback(error)

            return
        }
        callback(null, true)
    }) 
}

module.exports= checkFileExists

