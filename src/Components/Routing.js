import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Forms/Login'
import Signup from './Forms/Signup'
import Registration from './Forms/Registration'
import Admin from './Admin/Admin'
import Staff from './Staff/Staff'
import User from './User/User'
import NotFound from './Forms/NotFound'
import MainPage from './MainPage/MainPage'
import ForgetPassword from './Forms/ForgetPassword'

const Routing = () => {
  return (
    <Box>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='registration' element={<Registration/>}/>
            <Route path='forgetpassword' element={<ForgetPassword/>}/>
            <Route path='mainpage/*' element={<MainPage/>}/>
            <Route path='admin/*' element={<Admin/>}/>
            <Route path='staff/*' element={<Staff/>}/>
            <Route path='user/*' element={<User/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    
    </Box>
  )
}

export default Routing