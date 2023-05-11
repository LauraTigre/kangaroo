const { validateToken, validateCallback ,ClientError, ServerError, ExistenceError} = require('com')
/**
 * Retrieves the parents that favs to the specified user
 * 
 * @param {string} token The token of the user to retrieve the parent fav from
 * @param {function} callback The function to call back with the parents (or an error)
 * @return {Array} The parents that belong to the specified user
 */
function retrievefavParents(token, callback) {
    validateToken(token)
    validateCallback(callback)
    const xhr = new XMLHttpRequest()

    xhr.onload=() => {

        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body)
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))
    xhr.open('GET', 'http://localhost:8080/parents/favs')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}
export default retrievefavParents