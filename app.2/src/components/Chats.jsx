import { useState, useEffect, useContext } from "react"
import Context from '../Context'
import Container from '../library/Container'
import retrieveChats from '../logic/retrieve-chats'
import extractUserId from "../utils/extractUserId"
import { Link } from 'react-router-dom'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

function Chats() {

    const { alert } = useContext(Context)
    const [currentChats, setCurrentChats] = useState([])
    const userId = extractUserId(sessionStorage.token)
    const loadList = () => {
        try {
            retrieveChats(sessionStorage.token, (error, currentChats) => {
                if (error) {
                    alert(error)
                    return
                }

                setCurrentChats(currentChats)
            })
        } catch (error) {

            alert(error.message)
        }
    }
    useEffect(() => {
        loadList()
        const loadListIntervalId = setInterval(() => {
            loadList()
        }, 2000)

        return () => clearInterval(loadListIntervalId)
    }, [])
    return <Container>
        <Container TagName="ul" className="sm: 1/2 gap-4 py-10 ">
            {currentChats.map(currentChat => <li className="flex flex-row justify-around w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1]" key={currentChat.id} id={currentChat.id} >
                <p>{currentChat.users.find(user => user.id !== userId).name}</p>

                <Link to={`/chat/${currentChat.id}`}>
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" />
                </Link>
            </li>)}
        </Container>
    </Container>
}
export default Chats