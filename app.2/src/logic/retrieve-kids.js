const { validateToken, validateCallback, ClientError, ServerError, ExistenceError} = require('com')
/**
 * Retrieves the user public information
 * 
 * @param {string} token The token of the user to retrieve
 * @param {function} callback The function to call back with the user (or an error)
 */
function retrieveKids(token, callback){
    validateToken(token)
    validateCallback(callback)
    const xhr= new XMLHttpRequest()

    xhr.onload = () => {
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

    xhr.open('GET', 'http://localhost:8080/parents/kids')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveKids