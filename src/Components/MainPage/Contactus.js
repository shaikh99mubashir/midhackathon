import React from 'react'
import Appbar from '../Appbar'
const Contactus = () => {
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
    {
      name:'check SetData',
      link:'/mainpage/check'
    },
  ]
  return (
    <div>
     <Appbar appBarRouting={mainPageRouting}/>
      Contactus
    </div>
  )
}

export default Contactus