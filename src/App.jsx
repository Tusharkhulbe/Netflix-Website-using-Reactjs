import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/Login/Login"
import Player from "./pages/player/Player"
import { auth } from "./firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import New from "./Links/New"




const App=()=> {
  const navigate=useNavigate()
useEffect(()=>{

  onAuthStateChanged(auth,async (user)=>{
    if(user){
       console.log("Logged In");
      navigate('/')
    }
    else{
       console.log("logged Out");
      navigate('/login')
    }
  })
},[])
  return (
    <div>
   
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/login" element={<Login/> }/>
    <Route path="/player/:id" element={<Player/>}/>
    <Route path="/new" element={<New/>}/>
    </Routes>
    <ToastContainer />
   
    
    </div>
  )
}

export default App
