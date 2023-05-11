const { validateToken, validateNewPhoto,validateCallback, ClientError, ServerError, CoherenceError } = require('com')

/**
 * Registers a user in the database
 * 
 * @param {string} token The user
 * @param {string} photo The photo
 * @param {function} callback The callback
 */

function updatePhotoParent(token, newPhoto,callback) {
    validateToken(token)
    validateNewPhoto(newPhoto)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

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

    xhr.open('PATCH',`${process.env.REACT_APP_API_URL}/parents/photo`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = {newPhoto}
    const json = JSON.stringify(user)

    xhr.send(json)



}
export default updatePhotoParent


