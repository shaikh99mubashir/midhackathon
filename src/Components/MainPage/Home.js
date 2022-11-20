import { Box, Button, Typography } from "@mui/material";
import Appbar from "../Appbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader1 from "../../Images/loader1.gif";
import ScreenLoader from '../ScreenLoader'
import { getData } from "../Firebase/FirebaseMethod";
import { add } from "../Redux/LoginSlice";

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

  console.log(data);
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
            fontSize: { md: "10rem", sm: "5rem", xs: "1rem" },
          }}
        >
          {data.firstName}
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
            fontSize: { md: "7rem", sm: "5rem", xs: "1rem" },
          }}
        >
          Tag Line
        </Typography>
        <Button
          sx={{
            border: "1px solid white",
            padding: { md: 1, sm: "none", xs: "none" },
            fontSize: { md: "1rem", sm: ".5rem", xs: "0.5rem" },
            color: "white",
            hover: {
              "&:hover": {
                color: "purple",
              },
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
      )}
    </>
  );
};

export default Home;
