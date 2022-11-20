import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import ScreenLoader from "../ScreenLoader";
import loader1 from "../../Images/loader1.gif";
import { Box } from "@mui/system";
import { getData } from "../Firebase/FirebaseMethod";
import { add } from "../Redux/LoginSlice";

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

  return (
    <>
      {!data.firstName ? (
        <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <ScreenLoader src={loader1} />
        </Box>
      ) : (
        <>
          <div>{data.firstName}</div>
          <Header title="Admin Home PAge" />
        </>
      )}
    </>
  );
};

export default Admin1;
