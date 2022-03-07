import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import Loading from "./Loading"

const Userinfocard = ({num}) => {
  const [listOfUSer,setListOfUSer] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect (()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setListOfUSer(res.data)).then(()=>setLoading(false)).catch((err)=>console.log(err))
},[])

   const user = listOfUSer.find(usr=>usr.id === num)
    return (
        <div>
            {
                loading ?  <Loading/> :  <div> <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">City: {user.address.city}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Street: {user.address.street}</Card.Subtitle>

                </Card.Body>
              </Card> </div>
            } 
          
        </div>
    )
}

export default Userinfocard