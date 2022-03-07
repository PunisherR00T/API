import { Route, Routes } from 'react-router';
import './App.css';
import AllUsers from './Components/AllUsers';
import NavbarTop from './Components/NavbarTop';



function App() {
  return (
    <div >
     <NavbarTop/>
     
      <Routes>
      <Route path='/'/>
        <Route path='/Users' element={<AllUsers/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
