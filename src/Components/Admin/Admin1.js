import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import ScreenLoader from "../ScreenLoader";
import loader1 from "../../Images/loader1.gif";
import { Box } from "@mui/system";
import { getData, sendData } from "../Firebase/FirebaseMethod";
import { add } from "../Redux/LoginSlice";
import { Grid, Card, TextField } from "@mui/material";
import MyButton from "../MyButton";
import DropdownSelect from "../DropdownSelect";

const Admin1 = (props) => {
  const { uid } = props;
  const data = useSelector((a) => a.loginReducer);
  const dispatch = useDispatch();
  const gettingDataFb = () => {
    uid &&
      getData("users", uid)
        .then((success) => {
          dispatch(add(success));
        })
        .catch((error) => {
        });
  };

  useEffect(() => {
    gettingDataFb();
  }, [uid]);

  const [addTransport, setAddTransport] = useState({
    transportType:"",
    routTime:'',
    noOfSeats:'',
    price:'',
    routTo:'',
    routFrom:"",
    booking: false,
  })


  const addTransportDataToFb = () =>{
    alert('added SuccessFully In Database')
    sendData(addTransport, `addTransport`)
  }

  const dropDown ={
    1:'van',
    2:'School van',
    3:'hiACE'
  }
  return (
    <>
      {!data.firstName ? (
        <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <ScreenLoader src={loader1} />
        </Box>
      ) : (
        <>
          <h3>WelCome Back {data.firstName}</h3>
          <Header title="Add Transport" />


          <Box>
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
          
          <Box sx={{display:'flex', gap:4,}} className='mb-5'>
          <Box sx={{width:'50%'}}>
           <DropdownSelect id={dropDown} variant='standard' fullWidth label='tarnsport Type' onChange={(e)=> setAddTransport({...addTransport, transportType:e})}/>
          </Box>
           <TextField onChange={(e)=> setAddTransport({...addTransport, routTime:e.target.value})} variant="standard" label='Route Time'/>
          </Box>
          <Box sx={{display:'flex', gap:4,}} className='mb-5'>
           <TextField type='number' onChange={(e)=> setAddTransport({...addTransport, noOfSeats:e.target.value})} variant="standard" label='No oF Seats'/>
           <TextField type='number' onChange={(e)=> setAddTransport({...addTransport, price:e.target.value})} variant="standard" label='Price'/>
          </Box>
          <Box sx={{display:'flex', gap:4,}} className='mb-5'>
           <TextField onChange={(e)=> setAddTransport({...addTransport, routTo:e.target.value})} variant="standard" label='Rout To'/>
           <TextField onChange={(e)=> setAddTransport({...addTransport, routFrom:e.target.value})} variant="standard" label='Rout From'/>
          </Box>
            <Box sx={{width:'50%'}} className='mb-3'>
            <MyButton label='Submit' onClick={addTransportDataToFb} variant='contained'/>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>

        </>
      )}
    </>
  );
};

export default Admin1;
