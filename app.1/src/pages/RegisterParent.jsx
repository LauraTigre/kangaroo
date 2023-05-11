import { useState } from 'react'
import registerParent from '../logic/register-parent'
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'

function Parents(props) {
    console.log('Register -> render')

    const navigate = useNavigate()
    const [feedback, setFeedback] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const city = event.target.city.value
        const email = event.target.email.value
        const password = event.target.password.value
        const role = event.target.role.value

        try {
            registerParent(name, city,email, password, role, error => {
                if (error) {
                    setFeedback(error.message)
                    return
                }

                navigate('/login')

            })
        } catch (error) {
            setFeedback(error.message)
        }
    }
    return <Container className="justify-center font-['Poppins'] h-screen bg-slate-100">
        <main className='h-max'  >
            <h2 className="text-center text-2xl font-bold text-[#fb923c]">FAMILIES KANGAROO</h2>

            <Container TagName="form" className="gap-4 bg-[#fed7aa] mt-10 p-1 rounded-lg w-277 drop-shadow-md" onSubmit={handleSubmit}>
                <img className="h-20 w-20 " src="images/kangaroo.png" alt="kangaroo" />

                <Container className="justify-center gap-2">
                   
                    <input className="bg-[transparent] text-center focus:outline-none " type="text" id="name" placeholder="Your name" required />

                    <input className="bg-[transparent] text-center focus:outline-none " type="text" id="city" placeholder="Your city" required />
                    
                    <input className="bg-[transparent] text-center focus:outline-none " type="email" id="email" placeholder="Your email" required />
                   
                    <input className=" bg-[transparent] text-center focus:outline-none " type="password" id="password" placeholder="Your password" required />
                    <select className='bg-[transparent] text-[grey] text-center' name="role">
                        <option value="parent">Family</option> */
                        
                     </select>
                </Container>
                <div>
                    <Button type='submit'>REGISTER</Button>
                </div>

            </Container>
            <p className="flex items-center justify-center gap-2 text-[#dc2626] text-2xl">{feedback}</p>
            <p className="flex items-center justify-center gap-4">
                or
                <Link to="/login" className="text-2xl" >Login</Link>
            </p>
        </main>
    </Container>

}
export default Parents