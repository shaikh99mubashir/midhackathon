import React, { useEffect, useState } from 'react'
import Home from './Home'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { verifyUser } from '../Firebase/FirebaseMethod'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/LoginSlice'
import { Check } from './Check'
const MainPage = () => {
  const [uid, setUid] = useState('')
  console.log(uid)
  const location = useLocation()
  const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const verify = () =>{ 
      verifyUser().then((success)=>{
        setUid(success.uid)
       
      }).catch((error)=>{
        navigate('/')
      })
    }
    
    

useEffect (()=>{
  verify()
},[])

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home uid={uid}/>}/>
      <Route path='aboutus' element={<Aboutus/>}/>
      <Route path='contactus' element={<Contactus/>}/>
      <Route path='check' element={<Check/>}/>
    </Routes>
    </div>
  )
}

export default MainPage