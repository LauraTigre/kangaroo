import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import Button from '../library/Button'
import Container from '../library/Container'
import searchParents from '../logic/search-parents'
import toggleFavParent from '../logic/toogle-fav-parent'
import { Link } from 'react-router-dom'
import { StarIcon, ChatBubbleLeftRightIcon,ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import Message from './Message'


function SearchParents({ listUpdateStamp }) {


    const [parents, setParents] = useState([])
    const { alert } = useContext(Context)
    const [messageUserIdTo, setMessageUserIdTo] = useState()


    const handleSubmit = (event) => {
        event.preventDefault()

        const mondayMorningSelected = event.target.mondayMorningSelected.checked
        const mondayAfternoonSelected = event.target.mondayAfternoonSelected.checked
        const mondayEveningSelected = event.target.mondayEveningSelected.checked
        const tuesdayMorningSelected = event.target.tuesdayMorningSelected.checked
        const tuesdayAfternoonSelected = event.target.tuesdayAfternoonSelected.checked
        const tuesdayEveningSelected = event.target.tuesdayEveningSelected.checked
        const wendsdayMorningSelected = event.target.wendsdayMorningSelected.checked
        const wendsdayAfternoonSelected = event.target.wendsdayAfternoonSelected.checked
        const wendsdayEveningSelected = event.target.wendsdayEveningSelected.checked
        const thursdayMorningSelected = event.target.thursdayMorningSelected.checked
        const thursdayAfternoonSelected = event.target.thursdayAfternoonSelected.checked
        const thursdayEveningSelected = event.target.thursdayEveningSelected.checked
        const fridayMorningSelected = event.target.fridayMorningSelected.checked
        const fridayAfternoonSelected = event.target.fridayAfternoonSelected.checked
        const fridayEveningSelected = event.target.fridayEveningSelected.checked
        const saturdayMorningSelected = event.target.saturdayMorningSelected.checked
        const saturdayAfternoonSelected = event.target.saturdayAfternoonSelected.checked
        const saturdayEveningSelected = event.target.saturdayEveningSelected.checked
        const sundayMorningSelected = event.target.sundayMorningSelected.checked
        const sundayAfternoonSelected = event.target.sundayAfternoonSelected.checked
        const sundayEveningSelected = event.target.sundayEveningSelected.checked
        const kidsFrom = parseInt(event.target.kidsFrom.value)
        const kidsTo = parseInt(event.target.kidsTo.value)

        try {
            searchParents(sessionStorage.token, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, kidsFrom, kidsTo, (error, parents) => {
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

    }, [listUpdateStamp])


    const handleToggleFavParent = (parentId) => {
        try {
            toggleFavParent(sessionStorage.token, parentId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                
                setParents(parents => {
                    const index = parents.findIndex(parent => parent.id === parentId)
                    const parent = parents[index]
                    const parentUpdated = { ...parent }
        
                    parentUpdated.fav = !parentUpdated.fav
        
                    const parentsUpdated = [...parents]
        
                    parentsUpdated[index] = parentUpdated
        
                    return parentsUpdated
                })


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
           
        }




    return <Container className='w-full sm:h-full mb-20'>


        <Container TagName='form' className='sm:  p-5' onSubmit={handleSubmit}>
            <label className="p-5 mb-10 font-['Varela Round']" htmlFor="search">SEARCH PARENTS</label>
            <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-[#fb923c] rounded-md  drop-shadow-md'>
                <legend>Availability</legend>
                <table className='table table-fixed m-5'>
                    <thead>
                        <tr className='space-x-1'>
                            <th>Day</th>
                            <th>Morning</th>
                            <th>Afternoon</th>
                            <th>Evening</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-orange-200">
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Monday</th>
                            <td><input type="checkbox" id='mondayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='mondayAfternoonSelected' name='mondayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='mondayEveningSelected' name='mondayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Tuesday</th>
                            <td><input type="checkbox" id='tuesdayMorningSelected' name='tuesdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='tuesdayAfternoonSelected' name='tuesdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='tuesdayEveningSelected' name='tuesdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Wendsday</th>
                            <td><input type="checkbox" id='wendsdayMorningSelected' name='wendsdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='wendsdayAfternoonSelected' name='wendsdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='wendsdayEveningSelected' name='wendsdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Thursday</th>
                            <td><input type="checkbox" id='thursdayMorningSelected' name='thursdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='thursdayAfternoonSelected' name='thursdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='thursdayEveningSelected' name='thursdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Friday</th>
                            <td><input type="checkbox" id='fridayMorningSelected' name='fridayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='fridayAfternoonSelected' name='fridayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='fridayEveningSelected' name='fridayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Saturday</th>
                            <td><input type="checkbox" id='saturdayMorningSelected' name='saturdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='saturdayAfternoonSelected' name='saturdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='saturdayEveningSelected' name='saturdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='sm:px-2 py-1'>Sunday</th>
                            <td><input type="checkbox" id='sundayMorningSelected' name='sundayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='sundayAfternoonSelected' name='sundayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='sundayEveningSelected' name='sundayEveningSelected' ></input></td>

                        </tr>
                    </tbody>
                </table>


            </fieldset>

            <fieldset className='flex flex-row p-5 border-solid border-2 border-[#fb923c] rounded-md drop-shadow-md'>
                <legend>Kids</legend>
                <p>From: <input type="number" name="kidsFrom" className='bg-transparent w-28 border-[#fb923c]' /> </p>
                <p>To: <input type="number" name="kidsTo" className='bg-transparent w-28 border-[#fb923c]' /> </p>

            </fieldset>


            <Container className=' m-3'>

                <Button className='text-[#d6d3d1]' type='submit'>SEARCH</Button>
            </Container>
        </Container>

        <Container className="gap-2">


            {parents.map(parent => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] list-none drop-shadow-md" key={parent.id} id={parent.id}>
                <div className="flex flex-row justify-end">
                {parent.chat? <Link to={`/chat/${parent.chat}`}><ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" /> </Link> : <button onClick={()=>handleMessage(parent.user.id)}><ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#fb923c] mr-1" /></button>}
                    <button className="flex flex-row justify-end" id={parent.id} onClick={() => handleToggleFavParent(parent.id)}>{
                        parent.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                        :
                        <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>

                </div>
                        <img className="sm:w-20 h-20 rounded-lg" src=
                            {parent.photo} />

                <Link to={`/parents/${parent.id}`}><strong className="w-[28ch] text-left">{parent.user.name}</strong>
                </Link>
                <p className='text-[#fb923c]'>City: <span className='text-black'>{parent.city}</span></p>
                <ul className='text-[#fb923c]'>Kids : {parent.kids.map(kid => <li className='text-black list-disc ml-2' key={kid.id}>{kid.name}, {kid.dateOfBirth.slice(0, 10)}</li>)}</ul>

                <p className='text-[#fb923c]'>Description:<span className='text-black '> {parent.description} </span></p>
                <p className='text-[#fb923c]'>Extras: <span className='text-black'>{parent.extras}</span></p>
                <ul className='text-[#fb923c]'>Availability : {parent.availabilities.map(availabity => <li className='text-black list-disc ml-2' key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            </li>
            )}
            {messageUserIdTo && <Message onSendMessage={handleSendMessage} onCloseMessage={handleCloseMessage} userIdTo={messageUserIdTo}/>}

        </Container>


    </Container>


}
export default SearchParents