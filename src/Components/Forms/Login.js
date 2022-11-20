import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginWithUser } from "../Firebase/FirebaseMethod";
import MyButton from '../MyButton'
import CircularProgress from "@mui/material/CircularProgress";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { add } from "../Redux/LoginSlice";
function Login() {
  const [isloding, setLoding] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",

  });
  const loginButton = () => {
    setLoginData("");
    setLoding(true);
    loginWithUser(loginData,'users', setLoding)
      .then((success) => {
        console.log('success', success)
        // dispatch(add(success))
        if (success.category === 'admin') {
          setLoding(false);
          navigate("admin", { state: success });
        } else {
          console.log("succes login", success);
          setLoding(false);
          navigate("mainpage", { state: success });
        }
      })
      .catch((error) => {
        setLoding(false);
        console.log("error", error);
      });
  };
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
          className='bgImage'
      >
        {/* <Grid
          sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
          item
          md={5}
        >
          <Box>
            <img src={Image} width="100%" />
          </Box>
        </Grid> */}

        <Grid item md={4} sm={6} xs={12}>
          <Box
            sx={{
              width: 500,
              boxShadow: { md: "none", sm: "3", xs: "3" },
              padding: 3,
              backgroundColor:'rgba(200,200,200,0.2)'
            }}
          >
            <Box sx={{ marginTop: 5 }}>
              <Typography variant="p" sx={{ fontSize: "2.5rem" }}>
                {" "}
                Welcome!{" "}
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" sx={{ color: "grey" }}>
                {" "}
                Sign in to continue.{" "}
              </Typography>
            </Box>
            <Box sx={{ marginTop: 5 }}>
              <TextField
                id="standard-basic"
                fullWidth
                label="Email"
                variant="standard"
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <TextField
                id="standard-basic"
                fullWidth
                label="Password"
                type='password'
                variant="standard"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </Box>
            <Box sx={{ marginTop: 5 }}>
              <MyButton variant="contained" color="primary" fullWidth onClick={loginButton} label='login' isLoading={isloding}/>
               
            </Box>
            <Link to='signup'>
            <Box sx={{ marginTop: 3 }}>
              <Button variant="contained" color="primary" fullWidth>
                Create an Account
              </Button>
            </Box>
            </Link>
            <Link to='forgetpassword'>
            <Box sx={{ marginTop: 3 }}>
              <Button variant="standard" color="primary" fullWidth>
                Forget Password
              </Button>
            </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
