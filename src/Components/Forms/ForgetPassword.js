import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <Box>
    <Grid container sx={{display : "flex", justifyContent : "center", alignItem : "center", marginTop : 10}}>
        <Grid item md={4} sm={6} xs={12}>
            <Box sx={{ width: 400 }}>
                <Box sx={{marginTop : 5}}>
                <Typography variant="p" sx={{fontSize : "2.5rem"}}> ForGet Password </Typography>
                </Box>
                <Box>
                <Typography variant="p" sx={{color : "grey"}}>  </Typography>
                </Box>
                <Box sx={{marginTop : 5}}>
                <TextField id="standard-basic" fullWidth label="Email" variant="standard" />
                </Box>
                <Box sx={{marginTop : 3}}>
                <TextField id="standard-basic" fullWidth label="Password" variant="standard" />
                </Box>
                <Box sx={{marginTop : 5}}>
                    <Button variant="contained" color="primary" fullWidth> submit </Button>
                </Box>
                <Link to='/'>
                <Box sx={{marginTop : 5}}>
                    <Button variant="standard" color="primary" fullWidth> Back To Login </Button>
                </Box>
                </Link>
                
            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default ForgetPassword
