import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { verifyUser } from "../Firebase/FirebaseMethod";
import PersistentDrawerLeft from "../PersistentDrawerLeft";
import { add } from "../Redux/LoginSlice";
import Admin1 from "./Admin1";
import Admin2 from "./Admin2";
import Admin3 from "./Admin3";
import Admin4 from "./Admin4";
import TransportData from './TransportData'

const Admin = () => {
  const adminRouting = [
    {
      name: "Add Transport",
      link: "/admin",
    },
    {
      name: "User Booking Data",
      link: "admin2",
    },
    {
      name: "admin3",
      link: "admin3",
    },
    {
      name: "admin4",
      link: "admin4",
    },
    {
      name: "Transport Data",
      link: "transportData",
    },
  ];

  const dispatch = useDispatch();
  const location = useLocation();
  let data = location.state;
  const navigate = useNavigate();
  const [uid, setUid] = useState('')
  
  const veify = () => {
    verifyUser()
      .then((success) => {
        // dispatch(add(data));
        setUid(success.uid)
      })
      .catch((error) => {
        navigate("/");
      });
  };

  useEffect(() => {
    veify();
  }, []);

  return (
    <div>
      <PersistentDrawerLeft drawerLink={adminRouting} />
      <Routes>
        <Route path="/" element={<Admin1 uid={uid} />} />
        <Route path="admin2" element={<Admin2 />} />
        <Route path="admin3" element={<Admin3 />} />
        <Route path="admin4" element={<Admin4 />} />
        <Route path="transportdata" element={<TransportData/>} />
      </Routes>
    </div>
  );
};

export default Admin;
