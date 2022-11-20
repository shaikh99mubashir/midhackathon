import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { verifyUser } from '../Firebase/FirebaseMethod'
import PersistentDrawerLeft from '../PersistentDrawerLeft'
import User1 from './User1'
import User2 from './User2'
import User3 from './User3'
import User4 from './User4'
const User = () => {
  const userRouting = [
    {
      name: "user1",
      link: "/user"
    },
    {
      name: "user2",
      link: "user2",
    },
    {
      name: "user3",
      link: "user3",
    },
    {
      name: "user4",
      link: "user4",
    },
  ];
  const navigate = useNavigate()
    verifyUser().then((success)=>{
      console.log(success)
    }).catch((error)=>{
      navigate('/')
    })
  return (
    <div>
      <PersistentDrawerLeft drawerLink={userRouting} />
      <Routes>
        <Route path="/" element={<User1 />} />
        <Route path="user2" element={<User2 />} />
        <Route path="user3" element={<User3 />} />
        <Route path="user4" element={<User4 />} />
      </Routes>
    </div>
  )
}

export default User