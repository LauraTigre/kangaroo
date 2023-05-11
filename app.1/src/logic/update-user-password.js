const { validateToken,validatePassword, validateNewPassword,validateNewPasswordConfirm, validateCallback , ClientError,
    ServerError,
    ExistenceError,
    AuthError} = require('com')
  
  /**
   * Updates the user password
   * 
   * @param {string} token The user id
   * @param {string} currentPassword The user current password
   * @param {string} newPassword The user new password
   * @param {string} newPasswordConfirm The confirmation of the new password
   * @param {function} callback the callback
   */
  function updateUserPassword(token, password, newPassword, newPasswordConfirm, callback) {
    validateToken(token)
      validatePassword(password)
      validateNewPassword(newPassword)
      validateNewPasswordConfirm(newPasswordConfirm)
      validateCallback(callback)
    const xhr = new XMLHttpRequest
     
    xhr.onload= () => {
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
    xhr.open('PATCH','http://localhost:8080/users/updatePassword')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {password, newPassword,newPasswordConfirm }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default updateUserPassword