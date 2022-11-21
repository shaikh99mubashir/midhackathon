import { Box, Button, Grid, Typography } from "@mui/material";
import Appbar from "../Appbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader1 from "../../Images/loader1.gif";
import ScreenLoader from '../ScreenLoader'
import { getData } from "../Firebase/FirebaseMethod";
import { add } from "../Redux/LoginSlice";
import MediaCard from "../MediaCard";
// import {DetailedCard} from '../DetailedCard'

const Home = (props) => {
  const {uid} = props
  const data = useSelector((a) => a.loginReducer);
  console.log(data);
  const mainPageRouting = [
    {
      name: "Home",
      link: "/mainpage",
    },
    {
      name: "About us",
      link: "aboutus",
    },
    {
      name: "Contact us",
      link: "contactus",
    },
  ];

  const dispatch = useDispatch();
  const gettingDataFb = () => {
    uid &&
      getData("users", uid)
        .then((success) => {
          console.log(success);
          dispatch(add(success));
        })
        .catch((error) => {
          console.log("erroe", error);
        });
  };

  useEffect(() => {
    gettingDataFb();
  }, [uid]);


  const [transportData , setTransportData] = useState([])
  useEffect(()=>{
  GetDatafromDB ()
      
  },[])
 
  function GetDatafromDB (){
      getData('addTransport')
      .then((success)=>{
          console.log('success', success)
          const myData =[]
          Object.entries(success).map(([key, values])=>{
              myData.push({
                  ...values,
                  id: key
              })
              setTransportData(myData)
          })
      })
      .catch((error)=>{
          console.log('error', error)
      })
  }

  const mediaCard = (event) =>{
    console.log('evevnt', event)
  }

  return (
    <>

      {!data.firstName ? (
        <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <ScreenLoader src={loader1} />
        </Box>
      ) : (
    <Box>
        
      
      <Appbar
        appBarRouting={mainPageRouting}
        sx={{ boxShadow: "none", backgroundColor: "black" }}
      />
      <Box sx={{ padding: 5 }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
            fontSize: { md: "2rem", sm: ".5rem", xs: ".5rem" },
          }}
        >
          Welcome {data.firstName}
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
            fontSize: { md: "1rem", sm: ".5rem", xs: ".1rem" },
          }}
        >
          Check Your Ride
        </Typography>
        <Box className='d-flex' sx={{gap:3}}>
        {transportData && transportData.map((item, i)=>
          <Grid item md={3} sm={6} xs={12} >
          <MediaCard data={item} key={i} uid={uid}  onClick={(e)=>mediaCard(e)}/>
          </Grid>
        )}  
        </Box>
      </Box>
    </Box>
      )}
    </>
  );
};

export default Home;
