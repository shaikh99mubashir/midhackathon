import React from "react";
import { Route, Routes } from 'react-router-dom'
import PersistentDrawerLeft from '../PersistentDrawerLeft'
import Staff1 from './Staff1'
import Staff2 from './Staff2'
import Staff3 from './Staff3'
import Staff4 from './Staff4'

const Staff = () => {
  const staffRouting = [
    {
      name: "staff1",
      link: "/staff"
    },
    {
      name: "staff2",
      link: "staff2",
    },
    {
      name: "staff3",
      link: "staff3",
    },
    {
      name: "staff4",
      link: "staff4",
    },
  ];
  return (
    <div>
      <PersistentDrawerLeft drawerLink={staffRouting} />
      <Routes>
        <Route path="/" element={<Staff1 />} />
        <Route path="staff2" element={<Staff2 />} />
        <Route path="staff3" element={<Staff3 />} />
        <Route path="staff4" element={<Staff4 />} />
      </Routes>
    </div>
  );
};

export default Staff;
