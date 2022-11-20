import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { signUpUser } from "../Firebase/FirebaseMethod";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ScreenLoader from "../ScreenLoader";
import loader1 from "../../Images/loader1.gif";
import MyButton from "../MyButton";
const Signup = () => {
  const navigate = useNavigate();
  const [isloding, setLoding] = useState(false);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    category: "user",
  });

  const signUpButtonClicked = () => {
    setLoding(true);
    signUpUser(signupData, "users", setLoding)
      .then((success) => {
        setLoding(false);
        // alert(success)
        navigate("/");
        console.log("success==>", success);
      })
      .catch((error) => {
        setLoding(false);
        console.log("error==>", error);
      });
  };
  return (
    <Box>
      {/* {!isloding?  */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          marginTop: 10,
        }}
      >
        <Grid item md={4} sm={6} xs={12}>
          <Box sx={{ width: 400 }}>
            <Box sx={{ marginTop: 5 }}>
              <Typography variant="p" sx={{ fontSize: "2.5rem" }}>
                {" "}
                Welcome!{" "}
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" sx={{ color: "grey" }}>
                {" "}
                Sign up to continue.{" "}
              </Typography>
            </Box>
            <Box sx={{ marginTop: 5 }}>
              <TextField
                id="standard-basic"
                fullWidth
                label="First Name"
                variant="standard"
                onChange={(e) =>
                  setSignupData({ ...signupData, firstName: e.target.value })
                }
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <TextField
                id="standard-basic"
                fullWidth
                label="Last Name"
                variant="standard"
                onChange={(e) =>
                  setSignupData({ ...signupData, lastName: e.target.value })
                }
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <TextField
                id="standard-basic"
                fullWidth
                label="Email"
                variant="standard"
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <TextField
                id="standard-basic"
                fullWidth
                label="Password"
                variant="standard"
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />
            </Box>
            <Box sx={{ marginTop: 5 }}>
              <MyButton
                variant="contained"
                isLoading={isloding}
                color="primary"
                fullWidth
                onClick={signUpButtonClicked}
                label="signup"
              />
            </Box>
            <Link to="/">
              <Box sx={{ marginTop: 3 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Already Have Account?
                </Button>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* :
      <Box sx={{display:'grid', placeItems:'center', height:'100vh'}}>
      <ScreenLoader src={loader1}/> 
      </Box>} */}
    </Box>
  );
};

export default Signup;
