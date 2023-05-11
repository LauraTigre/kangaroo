import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import Button from '../library/Button'
import Container from '../library/Container'
import searchNannies from '../logic/search-nannies'
import toggleFavNanny from '../logic/toogle-fav-nanny'
import { Link } from 'react-router-dom'
import { StarIcon, ChatBubbleLeftRightIcon,ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import Message from './Message'


function SearchNannies({ listUpdateStamp }) {

    const [nannies, setNannies] = useState([])
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
        const priceFrom = parseInt(event.target.priceFrom.value)
        const priceTo = parseInt(event.target.priceTo.value)
        const yearsOfExperienceFrom = parseInt(event.target.yearsOfExperienceFrom.value)
        const yearsOfExperienceTo = parseInt(event.target.yearsOfExperienceTo.value)

        try {
            searchNannies(sessionStorage.token, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, priceFrom, priceTo, yearsOfExperienceFrom, yearsOfExperienceTo, (error, nannies) => {
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
 
    }, [listUpdateStamp])


    const handleToggleFavNanny = (nannyId) => {
        try {
           
            toggleFavNanny(sessionStorage.token, nannyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

               


                setNannies(nannies => {
                    const index = nannies.findIndex(nanny => nanny.id === nannyId)
                    const nanny = nannies[index]
                    const nannyUpdated = { ...nanny }
        
                    nannyUpdated.fav = !nannyUpdated.fav
        
                    const nanniesUpdated = [...nannies]
        
                    nanniesUpdated[index] = nannyUpdated
        
                    return nanniesUpdated
                })
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


    }


    return <Container className='sm:h-full mb-20 items-center,justify-center'>


        <Container TagName="form" className='sm: p-5' onSubmit={handleSubmit}>
            <label className='p-5' htmlFor="search">SEARCH NANNIES</label>
            <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-[#fb923c] rounded-md'>
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

            <fieldset className='sm: flex flex-row p-5 border-solid border-2 border-[#fb923c] rounded-md mt-4'>
                <legend>Price</legend>
                <p>From: <input type="number" name="priceFrom" className='bg-transparent w-20' /> </p>
                <p>To: <input type="number" name="priceTo" className='bg-transparent w-20' /> </p>

            </fieldset>
            <fieldset className='sm: flex flex-row p-5 border-solid border-2 border-[#fb923c] rounded-md mt-4'>
                <legend className='text-lg'>YearsOfExperience</legend>
                <p>From: <input type="number" name="yearsOfExperienceFrom" className='bg-transparent w-20' /> </p>
                <p>To: <input type="number" name="yearsOfExperienceTo" className='bg-transparent w-20' /> </p>

            </fieldset>

            <Container className=' m-3'>

                <Button type='submit' className="text-[#d6d3d1]">SEARCH</Button>
            </Container>
        </Container>

        <Container className="gap-2">


            {nannies.map(nanny => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] list-none" key={nanny.id} id={nanny.id}>
                <div className="flex flex-row justify-end">
                    {nanny.chat ? <Link to={`/chat/${nanny.chat}`}>
                        <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" />
                    </Link> :
                        <button onClick={() => handleMessage(nanny.user.id)}><ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#fb923c] mr-1" /></button>}
                    <button className="flex flex-row" id={nanny.id} onClick={() => handleToggleFavNanny(nanny.id)}>{

                        nanny.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                            :
                            <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>
                </div>
                <div>
                    <img className='w-20 h-20 rounded-lg' src=
                        {nanny.photo} />
                </div>

                <Link to={`/nannies/${nanny.id}`}>
                    <strong className="w-[28ch] text-left text-lg">{nanny.user.name}</strong>
                </Link>
                <p className='pt-1 text-[#fb923c]'>City:<span className='text-black'> {nanny.city}</span> </p>
                <p className='pt-1 text-[#fb923c]'>Email:<span className='text-black'>{nanny.user.email}</span></p>
                <p className='pt-1 text-[#fb923c]'>Price:<span className='text-black '> {nanny.price}€</span></p>
                <p className='pt-1 text-[#fb923c]'>Experience: <span className='text-black '>{nanny.experience}years</span></p>
                <p className='pt-1 text-[#fb923c]'>Description: <span className='text-black'>{nanny.description}</span></p>
                <p className='pt-1 text-[#fb923c]'> Extras: <span className='text-black'>{nanny.extras}</span></p>
            </li>
            )}
            {messageUserIdTo && <Message onSendMessage={handleSendMessage} onCloseMessage={handleCloseMessage} userIdTo={messageUserIdTo} />}

        </Container>


    </Container>


}
export default SearchNannies