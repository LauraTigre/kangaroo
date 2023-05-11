import{useState, useEffect} from 'react'
import Login from './pages/Login'
import RegisterParent from './pages/RegisterParent'
import RegisterNanny from './pages/RegisterNanny'
import Home from './pages/Home'
import { Routes, Route , Navigate, useLocation } from 'react-router-dom'
import Context  from './Context'
import Alert from './components/Alert'

function App() {
  const location = useLocation()
  const [timestamp, setTimestamp] = useState(Date.now())
  const [feedback, setFeedback] = useState()

  useEffect(() => {
    setTimestamp(Date.now())
  }, [location])

  const alert = (message, level = 'error') => {
    setFeedback({ message, level })
}

const handleAcceptFeedback = () => setFeedback()


  return <Context.Provider value={{ alert }}>
  {feedback && <Alert message={feedback.message} level={feedback.level} onAccept={handleAcceptFeedback} />}

    <div className="">
      <Routes>
        <Route path="/*" element={sessionStorage.token ? <Home/>: <Navigate to="/login"/>} />

        <Route path="/login" element={sessionStorage.token ? <Navigate to="/"/> : <Login/>}/>


        <Route path="/parent" element={sessionStorage.token ? <Navigate to="/"/> : <RegisterParent/>}/>

        <Route path="/nanny" element={sessionStorage.token ? <Navigate to="/"/> : <RegisterNanny/>}/>
      </Routes>
    </div>

    </Context.Provider>
  
  
}
export default App
