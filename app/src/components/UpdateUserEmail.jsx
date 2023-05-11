import { useState } from "react"
import updateUserEmail from "../logic/update-user-email"
import Button from "../library/Button"
import Container from "../library/Container"
import Feedback from "./Feedback"

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')
    const [feedback, setFeedback] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

        const password = event.target.password.value
        const newEmail = event.target.newEmail.value

        try {
            updateUserEmail(sessionStorage.token, password, newEmail, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })
                    return
                }
                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
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
       <Container TagName="form" className="sm: w-1/2 flex flex-col justify-center items-center gap-4 mt-10 p-1 rounded-lg w-277" onSubmit={handleSubmit}>
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend>New Email</legend>
        <input
          className="bg-transparent pb-2 "
          type="email"
          name="newEmail"
          placeholder="new email"
        />
        <input
          className="bg-transparent pb-2 "
          type="password"
          name="password"
          placeholder="your password"
        />
        
        <Button type="submit">Update email</Button>

      </fieldset>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>

       </Container>
}

export default UpdateUserEmail