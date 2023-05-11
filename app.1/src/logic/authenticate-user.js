import { validateEmail, validatePassword, validateCallback,  ClientError, ServerError, AuthError, ExistenceError } from 'com'
/**
 * 
 * @param {string} email the user email that I registered
 * @param {string} password the user pasword that I registered
 * @param {function} callback the callback
 */
function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        

        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            const { token } = body

            callback(null, token)
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', 'http://localhost:8080/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const credentials = { email, password }
    const json = JSON.stringify(credentials)

    xhr.send(json)

}
export default authenticateUser