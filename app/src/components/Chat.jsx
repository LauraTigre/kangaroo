import { useState, useEffect, useContext } from "react"
import Context from '../Context'
import Container from '../library/Container'
import retrieveChat from '../logic/retrieve-chat'
import chat from "../logic/chat"
import { useParams } from "react-router-dom"
import extractUserId from "../utils/extractUserId"
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

function Chat() {
    const { alert } = useContext(Context)
    const [currentChat, setCurrentChat] = useState()
    const { chatId } = useParams()

    const userId = extractUserId(sessionStorage.token)

    const loadList = () => {
        try {
            retrieveChat(sessionStorage.token, chatId, (error, currentChat) => {
                if (error) {
                    alert(error)
                    return
                }

                setCurrentChat(currentChat)
            })
        } catch (error) {

            alert(error.message)
        }
    }
    const handleSubmitMessage = event => {
        event.preventDefault()
        try {
            const message = event.target.message.value
            const userTo = currentChat.users.find(user => user.id !== userId)

            if(!message) return

            chat(sessionStorage.token, userTo.id, message, error => {
                if (error) {
                    alert(error)
                    return
                }
                event.target.reset()
                loadList()
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

    if (currentChat) {
        const userTo = currentChat.users.find(user => user.id !== userId)
        return <Container>
            <Container TagName="ul" className="sm: 1/2 gap-4 py-10 ">
                <h1> {userTo.name}</h1>
                {currentChat && currentChat.messages.map(message => <li className={"w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] overflow-auto drop-shadow-md" + (message.user.id === userId ? ' text-right bg-orange-200 pl-28' : ' text-left pr-28')} key={message.id} id={message.id} >

                    <p className="mt-3 text-sm">{message.message}</p>

                </li>)}
            </Container>
            <Container className="flex flex-row justify-center p-4 bg-white mb-20">
                <form className='flex flex-row' onSubmit={handleSubmitMessage}>
                    <label htmlFor='message' className="flex items-center">Message :</label>
                    <input type="text" name="message" className='flex items-center' />
                    <button type='submit'><PaperAirplaneIcon className="h-5 w-5 text-[#fb923c] text-center mr-1"/></button>
                </form>
            </Container>
        </Container>
    } else
        return null

}

export default Chat