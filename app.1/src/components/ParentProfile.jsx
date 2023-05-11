import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import retrieveParentProfile from '../logic/retrieve-parent-profile'
import Container from '../library/Container'


function ParentProfile() {
    console.log('NannyProfile -> render')
   
    const [parent, setParent] = useState()
    const {parentId} = useParams()
   

    useEffect(() => {

        try {
        retrieveParentProfile(sessionStorage.token, parentId, (error, parent)=>{
            if (error) {
                alert(error)
                return
            } 
            
            setParent(parent)
        })
            
        } catch (error) {
            alert(error.message)
        }
          
    }, [])

    return <Container>
           {parent &&  <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={parent.id} id={parent.id} >
            <strong>{parent.user.name}</strong>
            <p>City: {parent.city}</p>
             <p>Description: {parent.description}</p>
             <ul>Kids : {parent.kids.map(kid => <li key={kid.id}>{kid.name}, {kid.dateOfBirth}</li>)}</ul>
            <ul>Availability : {parent.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            
             <p>Extras: {parent.extras}</p> 

        </div>}
        

    </Container>
}


export default ParentProfile