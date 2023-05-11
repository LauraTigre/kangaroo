const { validateName, validateCity,validateExperience,validateEmail, validatePassword, ClientError, ServerError, CoherenceError } = require('com')

/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {string} email The user email
 * @param {string} password The user password
 */

function registerNanny(name,city,experience,email, password) {

    validateName(name)
    validateCity(city)
    validateExperience(experience)
    validateEmail(email)
    validatePassword(password)

   return fetch (`${process.env.REACT_APP_API_URL}/nannies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ name,city,experience,email, password})
   })
  .then (response => {
    const {status} = response

    if (status === 400){
        return response.json()
                    .then(payload => {
                        const { error } = payload
                        throw new ClientError(error)
                    })
    }else if (status === 409){
        return response.json()
                    .then(payload => {
                        const { error } = payload
                        throw new CoherenceError(error)
                    })
     } else if (status === 500) {
        return response.json()
            .then(payload => {
                const { error } = payload
                throw new ServerError(error)
            })
        }else if (status === 201) {
            return
        }
       
  })

}
export default registerNanny


