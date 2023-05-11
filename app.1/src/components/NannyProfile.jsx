import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import retrieveNannyProfile from '../logic/retrieve-nanny-profile'
import Container from '../library/Container'


function NannyProfile() {
    console.log('NannyProfile -> render')
   
    const [nanny, setNanny] = useState()
    const {nannyId} = useParams()
   

    useEffect(() => {

        try {
        retrieveNannyProfile(sessionStorage.token, nannyId, (error, nanny)=>{
            if (error) {
                alert(error)
                return
            } 
            
            setNanny(nanny)
        })
            
        } catch (error) {
            alert(error.message)
        }
          
    }, [])

    return <Container>
           {nanny &&  <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={nanny.id} id={nanny.id} >
            <strong>{nanny.user.name}</strong>
            <p>City: {nanny.city}</p>
             <p>Description: {nanny.description}</p>
            <p>Experience: {nanny.experience}</p>
            <p>Price: {nanny.price}€</p>
             <p>Date of birth: {nanny.dateOfBirth ? nanny.dateOfBirth.slice(0,10):''}</p>
            <ul>Availability : {nanny.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
             <p>Extras: {nanny.extras}</p> 

        </div>}
        

    </Container>
}


export default NannyProfile