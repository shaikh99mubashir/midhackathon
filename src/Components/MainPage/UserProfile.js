import { Avatar, Button, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getData } from '../Firebase/FirebaseMethod'
import Stack from "@mui/material/Stack";
import dummyImg from '../../Images/image.jpg'
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const data = useSelector((a) => a.loginReducer);
  // console.log(data);
  const [userData, setUserData] = useState('')
  const getDatafromDB = () =>{
    getData('users')
    .then((success)=>{
        setUserData(success)
    })
    .catch((error)=>{
        console.log('error', error)
    })
}

console.log('userData',userData)

useEffect(()=>{
    getDatafromDB()
},[])

  return (
    <div>
    <Box className='mt-5'>
      <Grid container sx={{ display: "grid", placeItems: "center" }}>
        <Grid item md={8} sm={10} xs={12}>
          <Card
            sx={{
              width: { md: "60vw", sx: "60vw", xs: "100vw" },
              display: "grid",
              placeItems: "center",
              // height: "100vh",
            }}
          >
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src={dummyImg}
                  sx={{
                    width: { md: 200, sx: 170, xs: 140 },
                    height: { md: 200, sx: 170, xs: 140 },
                  }}
                />
              </Stack>
              <Button
                sx={{
                  color: "grey",
                  border: "0.01rem solid grey",
                  marginTop: 2,
                  width: { md: 170, sx: 170, xs: 130 },
                  height: { md: 30, sx: 30, xs: 20 },
                  fontSize: { md: 12, sx: 8, xs: 10 },
                }}
              >
                Edit Profile Image
              </Button>
            </Box>
            <Typography
              sx={{
                color: "grey",
                fontSize: { md: 45, sx: 35, xs: 25 },
                marginTop: 2,
              }}
            >
              
              {data.firstName} {data.lastName}
            </Typography>
            <Typography
              sx={{
                color: "grey",
                fontSize: { md: 20, sx: 15, xs: 11 },
                marginTop: "0.02rem",
              }}
            >
             {data.email}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent:'center',
                flexDirection: { md: "row", sx: "row", xs: "column" },
                gap: 2,
                marginTop: 2,
                marginBottom: 2,
                width: "100%",
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
            <>
            <Box width='100%' sx={{display:'flex', justifyContent:'center'}}>
              <Box>
                <Typography sx={{ marginBottom:3, fontSize:25}}>Personal Info</Typography>
                <Box sx={{ display: "flex", gap: 1, width:'20vw', }}>
                  <Typography sx={{ fontSize: 22 }}>CNIC: </Typography>
                  <Typography sx={{ fontSize: 22 }}>
                    5151
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1,width:'20vw'  }}>
                  <Typography sx={{ fontSize: 22 }}>Contact : </Typography>
                  <Typography sx={{ fontSize: 22 }}>
                    551515
                  </Typography>
                </Box>
              </Box>
              </Box>
            
            </>
              
              {/* <Typography sx={{ fontSize: 22 }}></Typography>
              <Typography sx={{ fontSize: 22 }}>{userData.course}</Typography> */}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
    
    </div>
  )
}

export default UserProfile
