import { useState, useEffect, useContext } from 'react'
import retrieveUser from '../logic/retrieve-user'
import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import Context from '../Context'
import Container from '../library/Container'
import ParentsList from '../components/ParentsList'
import FavoritesNannies from '../components/FavoritesNannies'
import FavoritesParents from '../components/FavoritesParents'
import NanniesList from '../components/NanniesList'
import Nanny from '../components/Nanny'
import Parent from '../components/Parent'
import ProfileNanny from '../components/ProfileNanny'
import SearchNannies from '../components/SearchNannies'
import SearchParents from '../components/SearchParents'
import { MagnifyingGlassIcon, StarIcon, UserCircleIcon, HomeIcon, Bars3Icon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import ProfileParent from '../components/ProfileParent'
import UpdateUserEmail from '../components/UpdateUserEmail'
import UpdateUserPassword from '../components/UpdateUserPassword'
import Chats from '../components/Chats'
import Chat from '../components/Chat'



function Home() {
  console.log('Home ->render')

  const { alert } = useContext(Context)
  const navigate = useNavigate()
  const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
  const [user, setUser] = useState({})
  const [nannies, setNannies] = useState([])
  const [parents, setParents] = useState([])
  const [showNav, setShowNav] = useState(false)

  const handleClick = () => {
    setShowNav(!showNav)

  }

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

  const handleToggleFavNanny = (nannyId) => {
    setNannies(nannies => {
      const index = nannies.findIndex(nanny => nanny.id === nannyId)
      const nanny = nannies[index]
      const nannyUpdated = { ...nanny }

      nannyUpdated.fav = !nannyUpdated.fav

      const nanniesUpdated = [...nannies]

      nanniesUpdated[index] = nannyUpdated

      return nanniesUpdated
    })


  }

  const handleToggleFavParent = (parentId) => {
    setParents(parents => {
      const index = parents.findIndex(parent => parent.id === parentId)
      const parent = parents[index]
      const parentUpdated = { ...parent }

      parentUpdated.fav = !parentUpdated.fav

      const parentsUpdated = [...parents]

      parentsUpdated[index] = parentUpdated

      return parentsUpdated
    })


  }


  return <Container className="sm:1/2 font-['Poppins'] h-full">
    {user.role === 'nanny' && <><header className='flex flex-row justify-between items-center fixed top-0 bg-white '>
    <Link to="/">
        <img src="images/kangaroo.png" alt="kangaroo" className="w-14 h-14 bg-[#fb923c] rounded-full p-1 m-2" />
      </Link>
      <h1 className='flex flex-col justify-center text-[#fb923c]' >NANNY KANGAROO</h1>
      <button onClick={handleLogout} className="bg-[#fb923c] h-7 w-20 m-3  text-white rounded-md ">LOGOUT</button>
    </header>
      <main className='mt-20'>
        <Routes>

          <Route path="/" element={<ParentsList listUpdateStamp={listUpdateStamp} onToggleFavParent={handleToggleFavParent} />} />
          <Route path="/parents/:parentId" element={<Parent />} />
          <Route path="/profile" element={<ProfileNanny />} />
          <Route path="/parents/favs" element={<FavoritesParents listUpdateStamp={listUpdateStamp} />} />
          <Route path="/email" element={<UpdateUserEmail listUpdateStamp={listUpdateStamp} />} />
          <Route path="/password" element={<UpdateUserPassword listUpdateStamp={listUpdateStamp} />} />
          <Route path="/search/parents" element={<SearchParents listUpdateStamp={listUpdateStamp} />} />
          <Route path="/chats" element={<Chats listUpdateStamp={listUpdateStamp}/>} />
          <Route path="/chat/:chatId" element={<Chat listUpdateStamp={listUpdateStamp}/>} />
        </Routes>


      </main>
      
      <footer className="sm: w-full fixed bottom-0 bg-[#fb923c] rounded-md">
        <nav className='flex justify-between'>
          <Link to="/" className="m-3" ><HomeIcon className="h-8 w-8 text-[#d6d3d1]" /></Link>


          <Link to="/search/parents" className="m-3" ><MagnifyingGlassIcon className="h-8 w-8 text-[#d6d3d1]" /></Link>

          <Link to="/parents/favs" className=" m-3"><StarIcon className="h-8 w-8 text-[#d6d3d1]" /></Link>
          <Link to="/chats" className=" m-3"><ChatBubbleLeftRightIcon className='h-8 w-8 text-[#d6d3d1]' /></Link>
          <button onClick={handleClick} className='mx-3 text-center'>
            {showNav ? <UserCircleIcon className="h-8 w-8 text-[#d6d3d1]" /> : <Bars3Icon className='h-8 w-8 text-[#d6d3d1]' />}
          </button>
          <>
            {showNav && <div onClick={handleClick} className="w-full h-full fixed">
              <ul className='flex flex-col   items-center bg-[#fb923c] fixed top-24 text-[#d6d3d1] text-xl mt-2 py-4  w-52 gap-y-8 rounded right-0'>
                <Link to="/profile" className=" border-2 inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">{user.name}</Link>
                <Link to="/email" className=" border-2 inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">update email</Link>
                <Link to="password" className=" border-2 inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">update password </Link>
              </ul>
            </div>
            }

          </>

        </nav>

      </footer></>

    }
    {user.role === 'parent' && <> <header className='flex flex-row justify-between items-center fixed top-0 bg-white'>
      <Link to="/">
        <img src="images/kangaroo.png" alt="kangaroo" className="w-14 h-14 bg-[#fb923c] rounded-full p-1 m-2" />
      </Link>
      <h1 className='flex flex-col justify-center text-[#fb923c]'>FAMILY KANGAROO</h1>
      <button onClick={handleLogout} className="bg-[#fb923c] h-7 w-20 m-3 text-[white] rounded-md">LOGOUT</button>
    </header>
      <main className='mt-20'>
        <Routes>

          <Route path="/" element={<NanniesList listUpdateStamp={listUpdateStamp} onToggleFavNanny={handleToggleFavNanny} />} />

          <Route path="/search/nannies" element={<SearchNannies listUpdateStamp={listUpdateStamp} onToggleFavNanny={handleToggleFavNanny} />} />

          <Route path="/nannies/:nannyId" element={< Nanny />} />
          <Route path="/nannies/favs" element={<FavoritesNannies listUpdateStamp={listUpdateStamp} />} />
          <Route path="/profile" element={<ProfileParent listUpdateStamp={listUpdateStamp} />} />
          <Route path="/email" element={<UpdateUserEmail listUpdateStamp={listUpdateStamp} />} />
          <Route path="/password" element={<UpdateUserPassword listUpdateStamp={listUpdateStamp} />} />
          <Route path="/chats" element={<Chats listUpdateStamp={listUpdateStamp}/>} />
          <Route path="/chat/:chatId" element={<Chat listUpdateStamp={listUpdateStamp}/>} />
        </Routes>

      </main>
      <footer className="sm: w-full position fixed bottom-0 bg-[#fb923c] rounded-md">
        <nav className='flex justify-between'>
          <Link to="/" className="m-3" ><HomeIcon className="h-8 w-8 text-[#d6d3d1]" /></Link>

          <Link to="/search/nannies" className="m-3" ><MagnifyingGlassIcon className="h-8 w-8 text-[#d6d3d1]" /></Link>

          <Link to="/nannies/favs" className="m-3" ><StarIcon className="h-8 w-8 text-[#d6d3d1]" /></Link>
          <Link to="/chats" className=" m-3"><ChatBubbleLeftRightIcon className='h-8 w-8 text-[#d6d3d1]' /></Link>
          <button onClick={handleClick} className='mx-3 text-center'>
            {showNav ? <UserCircleIcon className="h-8 w-8 text-[#d6d3d1]" /> : <Bars3Icon className='h-8 w-8 text-[#d6d3d1]' />}
          </button>
          <>
            {showNav && <div onClick={handleClick} className="w-full h-full fixed">
              <ul className='flex flex-col   items-center bg-[#fb923c] fixed top-24 text-[#d6d3d1] text-xl mt-2 py-4  w-52 gap-y-8 rounded right-0'>
                <Link to="/profile" className=" border-2 inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">{user.name}</Link>
                <Link to="/email" className=" border-2 inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">update email</Link>
                <Link to="password" className=" border-2 inline-block rounded   px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-700 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">update password </Link>
              </ul>
            </div>
            }

          </>
        </nav>

      </footer></>

    }

  </Container>


}
export default Home