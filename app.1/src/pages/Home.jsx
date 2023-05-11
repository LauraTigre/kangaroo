import { useState, useEffect, useContext } from 'react'
import retrieveUser from '../logic/retrieve-user'
import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import Context from '../Context'
import Container from '../library/Container'
import ParentsList from '../components/ParentsList'
import NanniesList from '../components/NanniesList'
import NannyProfile from '../components/NannyProfile'
import ParentProfile from '../components/ParentProfile'

function Home() {
  console.log('Home ->render')

  const { alert } = useContext(Context)
  const navigate = useNavigate()
 
  const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
  const [user, setUser] = useState({})
  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          alert(error.message)
          return
        }
        setUser(user)
      })

    } catch (error) {
      alert(error.message)
    }
  }, [])

  const handleLogout = () => {
    delete sessionStorage.token
    navigate('/login')
  }




  return <Container className="font-['Poppins'] h-screen bg-slate-100">
    {user.role === 'nanny' && <><header className='flex flex-row'>
      <Link to="/">
        <img src="images/kangaroo.png" alt="kangaroo" className="w-14 h-14 bg-[#fb923c] rounded-full p-1 m-2" />
      </Link>
      <h1 className='flex flex-col justify-center text-[#fb923c]' >NANNY KANGAROO</h1>
    </header>
      <main>
        <Routes>

          <Route path="/" element={<ParentsList listUpdateStamp={listUpdateStamp} />} />
          <Route path="/parents/:parentId" element={< ParentProfile />} />
        </Routes>


      </main>
      <footer className="position fixed bottom-0 bg-[#fb923c]">
        <nav>
          <Link to="/search" className="list-link m-3" >Search</Link>

          <Link to="/profile" className="profile-link m-3">{user.name}</Link>

          <Link to="my-favs" className="logout-link m-3" >My favorits</Link>


          <button onClick={handleLogout} className="bg-[#fb923c] h-7 w-20 m-3 text-white">LOGOUT</button>
        </nav>

      </footer></>

    }
    {user.role === 'parent' && <> <header className='flex flex-row justify-between'>
      <Link to="/">
        <img src="images/kangaroo.png" alt="kangaroo" className="w-14 h-14 bg-[#fb923c] rounded-full p-1 m-2" />
      </Link>
      <h1 className='flex flex-col justify-center text-[#fb923c]'>FAMILY KANGAROO</h1>
    </header>
      <main>
        <Routes>

          <Route path="/" element={<NanniesList listUpdateStamp={listUpdateStamp} />} />
          
          <Route path="/nannies/:nannyId" element={< NannyProfile />} />
        
        </Routes>

      </main>
      <footer className="position fixed bottom-0 bg-[#fb923c]">
        <nav>
          <Link to="/search" className="m-3" >Search</Link>

          <Link to="/profile" className=" m-3">{user.name}</Link>

          <Link to="my-favs" className="m-3" >My favorits</Link>


          <button onClick={handleLogout} className="bg-[#fb923c] h-7 w-20 m-3 text-white">LOGOUT</button>
        </nav>

      </footer></>

    }

  </Container>


}
export default Home