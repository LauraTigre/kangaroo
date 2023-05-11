const { validateName, validateCity,validateExperience,validateEmail, validatePassword,validateCallback, ClientError, ServerError, CoherenceError } = require('com')

/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {function} callback The callback
 */

function registerNanny(name,city,experience,email, password,callback) {

    validateName(name)
    validateCity(city)
    validateExperience(experience)
    validateEmail(email)
    validatePassword(password)
  
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

    xhr.open('POST', 'http://localhost:8080/nannies')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = { name,city,experience,email, password}
    const json = JSON.stringify(user)

    xhr.send(json)



}
export default registerNanny


