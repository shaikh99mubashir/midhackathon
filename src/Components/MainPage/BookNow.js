import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sendData } from '../Firebase/FirebaseMethod'
import Header from '../Header'
import MyButton from '../MyButton'

const BookNow = () => {
    const [bookNow, setBookNow] = useState({
        name:'',
        email:'',
        contact:'',
        cnic:'',
        to:'',
        from:'',
        isApproved: false,

    }) 

    const location = useLocation()
    let loc = location.state
    console.log('loc', loc)
    

    const addBookNowDataToFb = () =>{
        alert('added SuccessFully In Database')
        sendData(bookNow,`booknow`)
      }

  return (
    <Box>
    {/* <Link to='mainpage'>
    <Typography>Back</Typography>
    </Link> */}
    <Box sx={{marginTop:5,  display:'grid', placeItems:'center'}}>
    <Header title="Book Now" className='mt-5' />
    </Box>
    <Grid container sx={{ display: "grid", placeItems: "center" }}>
      <Grid item md={8} sm={10} xs={12}>
        <Card
        className='mt-4'
          sx={{
            width: { md: "60vw", sx: "60vw", xs: "100vw" },
            display: "grid",
            placeItems: "center",
            // height: "100vh",
          }}
        >
        <Box sx={{display:'flex', gap:5, marginBottom:5}}>
         <TextField onChange={(e)=> setBookNow({...bookNow, name:e.target.value})} label='name' variant='standard'/>
         <TextField onChange={(e)=> setBookNow({...bookNow, email:e.target.value})} label='email' variant='standard'/>

        </Box>
        <Box sx={{display:'flex', gap:5, marginBottom:5}}>
         <TextField onChange={(e)=> setBookNow({...bookNow, contact:e.target.value})} label='Contact' variant='standard'/>
         <TextField onChange={(e)=> setBookNow({...bookNow, cnic:e.target.value})} label='Cnic' variant='standard'/>
        </Box>
        <Box sx={{display:'flex', gap:5, marginBottom:5}}>
         <TextField onChange={(e)=> setBookNow({...bookNow, to:e.target.value})} label='To' variant='standard'/>
         <TextField onChange={(e)=> setBookNow({...bookNow, from:e.target.value})} label='From' variant='standard'/>
        </Box>
        <Box sx={{display:'flex', gap:5, marginBottom:5}}>
         <MyButton onClick={addBookNowDataToFb} label='Booked' variant='contained'/>
        </Box>
          
        </Card>
      </Grid>
    </Grid>
  </Box>
  )
}

export default BookNow
