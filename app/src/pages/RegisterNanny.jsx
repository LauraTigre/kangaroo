import { useState } from 'react'
import registerNanny from '../logic/register-nanny'
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'

function RegisterNanny(props) {
    console.log('Register -> render')

    const navigate = useNavigate()
    const [feedback, setFeedback] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const city = event.target.city.value
        const experience = parseInt(event.target.experience.value)
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerNanny(name, city,experience,email, password)
            .then(()=> navigate('/login'))
            .catch(error => setFeedback(error.message)) 
                
        } catch (error) {
            setFeedback(error.message)
        }
    }
    return <Container className="justify-center mt-10 font-['Poppins'] h-screen bg-[ url(/img/familia1-png.png)]">
        <main className='h-max'  >
            <h2 className="text-center text-2xl font-['Varela Round'] text-[#fb923c]">NANNY KANGAROO</h2>

            <Container TagName="form" className="sm: 1/2 gap-4 border-2 border-orange-400 mt-10 p-3 rounded-lg w-277 drop-shadow-md" onSubmit={handleSubmit}>
                <img className="h-10 w-10" src="images/kangaroo.png" alt="kangaroo" />

                <Container className="justify-center gap-2">
                   
                    <input className="bg-[transparent] text-center focus:outline-none " type="text" id="name" placeholder="Your name" required />

                    <input className="bg-[transparent] text-center focus:outline-none " type="text" id="city" placeholder="Your city" required />

                    <input className="bg-[transparent] text-center focus:outline-none " type="number" id="experience" placeholder="Your experinece" required />
                    
                    <input className="bg-[transparent] text-center focus:outline-none " type="email" id="email" placeholder="Your email" required />
                   
                    <input className=" bg-[transparent] text-center focus:outline-none " type="password" id="password" placeholder="Your password" required />
                
                </Container>
                <div>
                    <Button type='submit'>REGISTER</Button>
                </div>

            </Container>
            <p className="flex items-center justify-center gap-2 text-[#dc2626]">{feedback}</p>
            <p className="flex items-center justify-center gap-4 mt-3">
                or
                <Link to="/login" className="text-xl font-bold text-[#fb923c]" >Login</Link>
            </p>
        </main>
    </Container>

}
export default RegisterNanny