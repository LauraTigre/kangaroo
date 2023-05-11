const{ readdir, unlink} = require('fs')

function deleteAllFilesFromDirectory(directoryPath, callback){
    readdir(directoryPath, (error,files)=> {
        if(error){
            callback(error)
            return
        }
        if(!files.length){
            callback(null)

            return
        }
        let countDeletions =0

        files.forEach(file => {
            const filePath= directoryPath + '/' + file

            unlink(filePath, error => {
                if (error){
                    callback(error)

                    return
                }

                countDeletions++

                if (countDeletions === files.length){
                    callback(null)
                }
            })
        })
    })
}

module.exports = deleteAllFilesFromDirectory