import { useState, useEffect, useContext } from 'react'
import retrieveFavNannies from '../logic/retrieve-fav-nannies'
import Container from '../library/Container'
import toggleFavNanny from '../logic/toogle-fav-nanny'
import Context from '../Context'
import { Link } from 'react-router-dom'
import { StarIcon,ChatBubbleLeftRightIcon,ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import Message from './Message'



function FavoritesNannies({ listUpdateStamp }) {

    const { alert } = useContext(Context)
    const [messageUserIdTo, setMessageUserIdTo] =useState()
    const [nannies, setNannies] = useState([])

    const loadList = () => {

        try {
            retrieveFavNannies(sessionStorage.token, (error, nannies) => {
                if (error) {
                    alert(error.message)

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




    return <Container TagName="ul" className="gap-4 py-10 mb-10">
        
        {nannies.map(nanny => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] drop-shadow-md" key={nanny.id} id={nanny.id} >
        <div className="flex flex-row justify-end">
           {nanny.chat ? <Link to={`/chat/${nanny.chat}`}>
           <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" />
           </Link> :
                <button onClick={()=>handleMessage(nanny.user.id)}><ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#fb923c] mr-1" /></button>}

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
                <strong className="w-[28ch] text-lg text-left">{nanny.name}</strong>
            </Link>
            <ul className='pt-1 text-[#fb923c]'>Availability : {nanny.availabilities.map(availabity => <li className='text-black list-disc ml-2' key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>

            <p className='pt-1 text-[#fb923c]'>Experience: <span className='text-black'>{nanny.experience}</span></p>
            
        </li>
        )}

        {messageUserIdTo && <Message onSendMessage={handleSendMessage} onCloseMessage={handleCloseMessage} userIdTo={messageUserIdTo}/>}
    </Container>


}




export default FavoritesNannies