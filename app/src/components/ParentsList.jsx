import { useState, useEffect, useContext } from 'react'
import retrieveParents from '../logic/retrieve-parents'
import toggleFavParent from '../logic/toogle-fav-parent'
import { Link } from 'react-router-dom'
import Container from '../library/Container'
import Context from '../Context'
import { StarIcon,ChatBubbleLeftRightIcon , ChatBubbleBottomCenterTextIcon} from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import Message from './Message'



function ParentsList({ listUpdateStamp }) {

    const [parents, setParents] = useState([])
    const [messageUserIdTo, setMessageUserIdTo] = useState()
    const { alert } = useContext(Context)

    const loadList = () => {
        try {
            retrieveParents(sessionStorage.token, (error, parents) => {
                if (error) {
                    alert(error)
                    return
                }
                setParents(parents.reverse())
            })
        } catch (error) {
            alert(error.message)
        }

    }

    useEffect(() => {
        loadList()

    }, [listUpdateStamp])
    const handleToggleFavParent = event => {
        try {
            const parentId = event.currentTarget.id
            toggleFavParent(sessionStorage.token, parentId, error => {
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
    const handleMessage= parentUserId=> {
    
    setMessageUserIdTo(parentUserId)
    }
    const handleCloseMessage = () => {
        setMessageUserIdTo()
    }

    const handleSendMessage = () => {
        setMessageUserIdTo()
        loadList()
    }



    return <Container TagName="ul" className="gap-4 py-10 mb-10 ">

        {parents.map(parent => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] drop-shadow-md " key={parent.id} id={parent.id}>
            <div className="flex flex-row justify-end">
            {parent.chat? <Link to={`/chat/${parent.chat}`}><ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" /> </Link> : <button onClick={()=>handleMessage(parent.user.id)}><ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#fb923c] mr-1" /></button>}
            <button className="flex flex-row justify-end" id={parent.id} onClick={handleToggleFavParent}>{

                parent.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                    :
                    <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>
            
            </div>
            <div className='w-20 h-20'>
                <img className="sm: rounded-lg" src=
                    {parent.photo} />
            </div>
            <div>
                <Link to={`/parents/${parent.id}`}><strong className="w-[28ch] text-left">{parent.user.name}</strong>
                </Link>
                <p>{parent.city}</p>
                <p>{parent.description}</p>
                <p>{parent.extras}</p>
            </div>
          
        </li>
        )}
   {messageUserIdTo && <Message onSendMessage={handleSendMessage} onCloseMessage={handleCloseMessage} userIdTo={messageUserIdTo}/>}
    </Container>
}

export default ParentsList