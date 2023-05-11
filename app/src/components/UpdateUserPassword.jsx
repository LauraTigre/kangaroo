import{useState} from 'react'
import updateUserPassword from '../logic/update-user-password'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function UpdateUserPassword(){
console.log('UpdateUserPassword -> render')

const [feedback, setFeedback] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()

    const currentPassword = event.target.currentPassword.value
    const newPassword = event.target.newPassword.value
    const newPasswordConfirm = event.target.newPasswordConfirm.value

    try {
      updateUserPassword(sessionStorage.token, currentPassword, newPassword, newPasswordConfirm, error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })

          return
        }
        event.target.reset()
        setFeedback({
          message: 'password update successfully',
          level: 'success'
        })

      })


    } catch (error) {

      setFeedback({
        message: error.message,
        level: 'error'
      })
    }
  }

  return <Container>
    <Container TagName="form" className="sm: w-1/2 gap-4 mt-10 p-1 rounded-lg w-277" onSubmit={handleSubmit}>
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend>Change Password</legend>
        <input
          className="bg-transparent pb-2 "
          type="password"
          name="currentPassword"
          placeholder="current password"
        />
        <input
          className="bg-transparent pb-2 "
          type="password"
          name="newPassword"
          placeholder="new password"
        />
        <input
          className="bg-transparent pb-2 "
          type="password"
          name="newPasswordConfirm"
          placeholder="confirm new password"
        />

        <Button type="submit">Update password</Button>

      </fieldset>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>


  </Container>
}

export default UpdateUserPassword