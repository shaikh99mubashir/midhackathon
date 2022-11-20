import { Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, removeData, sendData } from '../Firebase/FirebaseMethod'
import MyButton from '../MyButton'

export const Check = () => {
    const [checkNode, setCheckNode] = useState({
        firstName:'',
        lastName:'',
        email:'',
    })

    const [successData, setSuccessData] = useState([])
    const [extraNodeData, setExtraNodeData] = useState([])

    const sendDataToDB =()=>{
        sendData(checkNode, `extraNode`)
        setCheckNode({})
    }

    const getDatafromDB = () =>{
        getData('extraNode')
        .then((success)=>{
            setSuccessData(success)
        })
        .catch((error)=>{
            console.log('error', error)
        })
    }

    useEffect(()=>{
        getDatafromDB()
    },[])

    const showData = () =>{
        let show = []

        console.log('show', show)
        if(successData){

            Object.entries(successData).map(([key,value])=>{
                show.push({...value, uid:key})
            })
            console.log(show)
            setExtraNodeData(show)
        }
    }

    useEffect(()=>{
        showData()
    },[successData])
    console.log('extraNodeData',extraNodeData)

    
    const editValue =(event) =>{
        let pro = prompt('enter value to Edit')
        event.email= pro
        sendData(event,`extraNode`, event.uid )
    }

    const removeValue = (event) =>{
        removeData(`extraNode`,event.uid)
    }

  return (
    <Box>
    <TextField label='firstname' variant='standard' onChange={(e)=>setCheckNode({...checkNode, firstName: e.target.value})}/>
    <TextField label='firstname' variant='standard' onChange={(e)=>setCheckNode({...checkNode, lastName: e.target.value})}/>
    <TextField label='firstname' variant='standard' onChange={(e)=>setCheckNode({...checkNode, email: e.target.value})}/>
    <Box sx={{width:'50%'}} className='mt-3'>
    <MyButton label= 'submit' variant='contained' onClick={sendDataToDB}/>
    </Box>


    {extraNodeData && extraNodeData.map((e,i)=>{
        return (
            <>

            <Typography>Email:-{e.email}</Typography>
            <Box sx={{width:'50%'}}>
        <MyButton variant='contained' onClick={()=>editValue(e)} label='edit'/>
        <MyButton variant='contained' onClick={()=>removeValue(e)} label='remove Value'/>
            </Box>
            </>
        )
    })}
    </Box>
  )
}
