const { validateToken, validatePhoto,validateCallback, ClientError, ServerError, CoherenceError} = require('com')

/**
 * Registers a user in the database
 * 
 * @param {string} token The token of the user
 * @param {string} photo The photo of the user
 * @param {function} callback The callback
 */

function insertPhotoParent(token, photo,callback) {

   validateToken(token)
   validatePhoto(photo)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 409)
                callback(new CoherenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }
    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', `${process.env.REACT_APP_API_URL}/parents/photo`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = {photo}
    const json = JSON.stringify(user)

    xhr.send(json)



}
export default insertPhotoParent


