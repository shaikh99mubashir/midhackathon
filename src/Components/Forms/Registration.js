import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DropdownSelect from '../DropdownSelect'
import MyDatePicker from '../MyDatePicker'
const Regestration = () => {
  const [data, setData] =useState({
    firstName:'',
    lastName:'',
    contact:'',
    cnic:'',
    city:'',
    country:'',
    fatherName:'',
    FatherCnic:'',
    fatherContact:'',
    emergencyContact:'',
    dob:'',
    age:'',
  })
  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            marginTop: 5,
          }}
        >
          <Grid item md={4} sm={6} xs={12}
          sx={{
            border: "1px solid #eeeeee",
            margin: 2,
            padding: 5,
            boxShadow: "1px 5px #eeeeee",
            borderRadius: 5,
          }}
          >
            <Box>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="p" sx={{ fontSize: "2.5rem" }}>
                  Staff Registration Form
                </Typography>
              </Box> 
              <Box sx={{display:'flex', gap:5}}>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,firstName:e.target.value}))}

                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,lastName:e.target.value}))}
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </Box>
              </Box>
             
              <Box sx={{display:'flex', gap:5}}>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,contact:e.target.value}))}
                  id="standard-basic"
                  label="Contact"
                  variant="standard"
                />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,cnic:e.target.value}))}
                  id="standard-basic"
                  label="Cnic"
                  variant="standard"
                />
              </Box>
              </Box>
              <Box sx={{display:'flex', gap:5}}>
              <Box sx={{ marginTop: 5, width:'100%' }}>
                <DropdownSelect variant='standard'/>
              </Box>
              <Box sx={{ marginTop: 5, width:'100%' }}>
              <DropdownSelect variant='standard' label='City'/>
              </Box>
              </Box>
              <Box sx={{display:'flex', gap:5}}>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,fatherName:e.target.value}))}
                  id="standard-basic"
                  label="Father Name"
                  variant="standard"
                />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,fatherCnic:e.target.value}))}
                  id="standard-basic"
                  label="Father CNIC"
                  variant="standard"
                />
              </Box>
              </Box>
              <Box sx={{display:'flex', gap:5}}>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,fatherContact:e.target.value}))}
                  id="standard-basic"
                  label="Father Contact"
                  variant="standard"
                />
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,emergencyContact:e.target.value}))}
                  id="standard-basic"
                  label="emergency Contact"
                  variant="standard"
                />
              </Box>
              </Box>
              <Box sx={{display:'flex', gap:5}}>

              <Box sx={{ marginTop: 7 }}>
                <MyDatePicker variant='standard'/>
              </Box>
              <Box sx={{ marginTop: 5 }}>
                <TextField
                onChange={(e)=>setData((prev)=>({...prev,age:e.target.value}))}
                  id="standard-basic"
                  label="Age"
                  variant="standard"
                />
              </Box>
              </Box>
              <Box sx={{ marginTop: 5, display:'grid', placeItems:'center' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Regestration;
