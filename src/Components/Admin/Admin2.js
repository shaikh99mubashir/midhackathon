import { Box, Button, Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getData, removeData } from '../Firebase/FirebaseMethod'
import Header from '../Header'

const Admin2 = () => {

  const [tableData , setTableData] = useState([])
    useEffect(()=>{
    GetDatafromDB ()
        
    },[])
   
    function GetDatafromDB (){
        getData('booknow')
        .then((success)=>{
            console.log('success', success)
            const myData =[]
            Object.entries(success).map(([key, values], Index)=>{
                myData.push({
                    ...values,
                    id: Index+1
                })
                setTableData(myData)
            })
        })
        .catch((error)=>{
            console.log('error', error)
        })
    }

    console.log('tableData', tableData)
    const deleteRow  =(event) =>{
      removeData("booknow", event.id)
      .then((success) => {
        // console.log(success);
      })
      .catch((error) => {
        // console.log(error);
      });

    }

    const approvedCell =(cellValues) =>{
      console.log('cellvalue', cellValues)
      // if(cellValues.isApproved){
      //   cellValues.isApproved === false
      // }
      // else{
      //   cellValues.isApproved === true
      // }

    }
    const columns = [
      { field: "id", headerName: "S.No.", width: 50 },
      { field: "name", headerName: "Name", width: 130 },
      { field: "email", headerName: "Email", width: 130 },
      { field: "Contact", headerName: "Contact", width: 130 },
      { field: "to", headerName: "To", width: 130 },
      { field: "from", headerName: "From", width: 130 },
      { field: "isApproved", headerName: "isApproved", width: 130 },
      {
        field: "action1",
        headerName: "Approved",
        width: 130,
        renderCell: (cellValues) => {
          return (
            <Button variant="contained" onClick={() => approvedCell(cellValues)}>
              Approved
            </Button>
          );
        },
      },
      {
        field: "action2",
        headerName: "Action",
        width: 130,
        renderCell: (cellValues) => {
          return (
            <Button variant="contained" onClick={() => deleteRow(cellValues.row)}>
              Delete
            </Button>
          );
        },
      },
    ];
  return (
    <>
    <Box sx={{marginTop:5,  display:'grid', placeItems:'center'}}>
    <Header title="Booking Data" className='mt-5' />
    </Box>
    
      <Box height={400} width="100%" sx={{padding:5}}>
        <DataGrid columns={columns} rows={tableData} pageSize={5} />
      </Box>
      
    </>
  
  )
}

export default Admin2