import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../Firebase/FirebaseMethod";
import MediaCard from "../MediaCard";
import loader1 from "../../Images/loader1.gif";
import ScreenLoader from "../ScreenLoader";
import newAppBar from "../newAppBar";
const WebMainPage = () => {
  const [transportData, setTransportData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetDatafromDB();
  }, []);

  function GetDatafromDB() {
    setLoading(true);
    getData("addTransport")
      .then((success) => {
        console.log("success", success);
        const myData = [];
        Object.entries(success).map(([key, values]) => {
          myData.push({
            ...values,
            id: key,
          });
          setTransportData(myData);
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div>
      {loading ? (
        <>
        <newAppBar/>
          <Typography
            sx={{
              color: "black",
              fontWeight: 400,
              fontSize: { md: "1rem", sm: ".5rem", xs: ".1rem" },
            }}
          >
            Check Your Ride
          </Typography>
          <Box className="d-flex" sx={{ gap: 3 }}>
            {transportData &&
              transportData.map((item, i) => (
                <Grid item md={3} sm={6} xs={12}>
                  <MediaCard data={item} key={i} />
                </Grid>
              ))}
          </Box>
        </>
      ) : (
        <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <ScreenLoader src={loader1} />
        </Box>
      )}
    </div>
  );
};

export default WebMainPage;
