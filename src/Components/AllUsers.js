import { Box, CssBaseline, List, Toolbar} from '@mui/material';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../App.css'
import Loading from './Loading';
import Userinfocard from './Userinfocard';

const AllUsers = () => {
    const [listOfUSer,setListOfUSer] = useState([])
    const [num,setNum] = useState(1)
    const [loading,setLoading] = useState(true)
    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setListOfUSer(res.data)).then(()=>setLoading(false)).catch((err)=>console.log(err))
    },[])
  const increment = () => num<10 && setNum(num+1 )
  const decrement = () => num>1 && setNum(num-1 ) 

    return (
        <div >
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
  
        <List id="List" >
        {
                loading ?  <Loading/> : listOfUSer.map(user=><div className='flex'><img id='usrimg' src='https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1646528884~hmac=30af7ead3ad516493c7412ee75f53e59' alt='Verify Source'/> <h2  id="username"   >{user.name}</h2></div>)
            }
        </List>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <article>
        <aside id='cardinf'>
     <Userinfocard num={num}/>
     </aside>
     <aside id='updwn'>
      <img src='https://cdn-icons-png.flaticon.com/512/6968/6968341.png' className='updown' onClick={decrement} alt='Verify Source'/>
      <img src='https://cdn-icons-png.flaticon.com/512/6968/6968330.png' className='updown' onClick={increment} alt='Verify Source'/>
      </aside>
      </article>
      </Box>  
    </Box>
        </div>
    )
}

export default AllUsers