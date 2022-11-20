import React from 'react'
import Appbar from '../Appbar'

const Aboutus = () => {
  const mainPageRouting =[
    {
      name:'Home',
      link:'/mainpage'
    },
    {
      name:'About us',
      link:'/mainpage/aboutus'
    },
    {
      name:'Contact us',
      link:'/mainpage/contactus'
    },
  ]
  return (
    <div>
    <Appbar appBarRouting={mainPageRouting}/>
      Aboutus
    </div>
  )
}

export default Aboutus
