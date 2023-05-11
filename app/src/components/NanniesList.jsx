import { useState, useEffect, useContext } from 'react'
import retrieveNannies from '../logic/retrieve-nannies'
import toggleFavNanny from '../logic/toogle-fav-nanny'
import Container from '../library/Container'
import Context from '../Context'
import { Link } from 'react-router-dom'
import { StarIcon, ChatBubbleLeftRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import Message from './Message'

function NanniesList({ listUpdateStamp }) {
    console.log('NanniesList -> render')
    const [nannies, setNannies] = useState([])
    const [messageUserIdTo, setMessageUserIdTo] = useState()
    const { alert } = useContext(Context)


    const loadList = () => {

        try {

            retrieveNannies(sessionStorage.token, (error, nannies) => {
                if (error) {
                    alert(error)
                    return
                }
                setNannies(nannies.reverse())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadList()

    }, [listUpdateStamp])

    const handleToggleFavNanny = event => {
        try {
            const nannyId = event.currentTarget.id
            toggleFavNanny(sessionStorage.token, nannyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                loadList()


            })
        } catch (error) {
            alert(error.message)
        }
    }
    const handleMessage = nannyUserId => {
        setMessageUserIdTo(nannyUserId)

    }

    const handleCloseMessage = () => {
        setMessageUserIdTo()
    }

    const handleSendMessage = () => {
        setMessageUserIdTo()

        loadList()
    }

    return <Container TagName="ul" className="sm: 1/2 gap-4 py-10 mb-10">
        {nannies.map(nanny => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] drop-shadow-md" key={nanny.id} id={nanny.id}>
            <div className="flex flex-row justify-end">
                {nanny.chat ? <Link to={`/chat/${nanny.chat}`}>
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" />
                </Link> :
                    <button onClick={() => handleMessage(nanny.user.id)}><ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#fb923c] mr-1" /></button>}


                <button className="flex flex-row" id={nanny.id} onClick={handleToggleFavNanny}>{

                    nanny.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                        :
                        <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>
            </div>
            <div>
                <img className='w-20 h-20 rounded-lg' src=
                    {nanny.photo} />
            </div>
            <Link to={`/nannies/${nanny.id}`}>
                <strong className="w-[28ch] text-left">{nanny.user.name}</strong>
            </Link>
            <p className='pt-1'>{nanny.city}</p>
            <p className='pt-1'>{nanny.description}</p>
            <p className='pt-1'>{nanny.extras}</p>
        </li>
        )}
        {messageUserIdTo && <Message onSendMessage={handleSendMessage} onCloseMessage={handleCloseMessage} userIdTo={messageUserIdTo} />}
    </Container>
}

export default NanniesList