const { validateToken, validateKidId, validateCallback, ClientError, ServerError, ExistenceError, AuthError } = require('com')

/**
 * delete kid
 * 
 * @param {string} token The session token
 * @param {string} kidId The kid identifier 
 * @param {callback} callback The function to call when the user is unregistered (or failed)
 */


function deleteKid(token, kidId, callback) {
    validateToken(token)
    validateKidId(kidId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 204) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('DELETE', `http://localhost:8080/parents/kid/${kidId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send()



}
export default deleteKid
