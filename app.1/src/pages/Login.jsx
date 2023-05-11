import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    console.log('login -> render')
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    setFeedback(error.message)
                    return
                }

                sessionStorage.token = token
                navigate('/')
            })

        } catch (error) {
            setFeedback(error.message)
        }

    }

    return <Container className="justify-center font-['Poppins']]  h-screen bg-slate-100">
        {/* <img className=''src='images/familia1-png.png' alt='familia' /> */}
        <main className='h-max'>
            <h2 className="text-center text-2xl font-bold text-[#fb923c] m-10">FAMILIES KANGAROO</h2>
            
           
            <Container TagName='form' className=" gap-4 bg-[#fed7aa] mt-10 p-3 rounded-lg drop-shadow-md w-200 h-max" onSubmit={handleSubmit}>
                <img className='h-20 w-20'src='images/kangaroo.png' alt='kangaroo' />
                <Container className='justify-center gap-2'>
                
                    <input className="bg-[transparent] text-center focus:outline-none" type="email" id="email" placeholder="Your email" required />

                   
                    <input className="bg-[transparent] text-center focus:outline-none "
                        type="password"
                        id="password"
                        placeholder="Your password"
                        required
                    />

                </Container>
                <div>
                   
                   <Button type= "submit">LOGIN</Button>
               </div>
           </Container>
           <p className="flex items-center justify-center gap-2 text-[#dc2626] text-2xl">{feedback}</p>
           <p className="flex items-center justify-center gap-2" >
               or  <Link to="/parent" className="text-2xl" >Register parents</Link>

               or <Link to="/nanny" className="text-2xl" >Register nanny</Link>
           </p>

           

        </main>

    </Container>

}
export default Login
