import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getData, removeData } from '../Firebase/FirebaseMethod'

const TransportData = () => {

  const [updateData, setUpdateData] = useState()
  const [tableData , setTableData] = useState([])
    useEffect(()=>{
    GetDatafromDB ()
        
    },[])
   
    function GetDatafromDB (){
        getData('addTransport')
        .then((success)=>{
            console.log('success', success)
            const myData =[]
            Object.entries(success).map(([key, values])=>{
                myData.push({
                    ...values,
                    id: key
                })
                setTableData(myData)
            })
        })
        .catch((error)=>{
            console.log('error', error)
        })
    }

    const deleteRow = (e) => {
        removeData("addTransport", e.id)
          .then((success) => {
            // console.log(success);
          })
          .catch((error) => {
            // console.log(error);
          });
      };

      const edit = (data) => {
        let { id } = data;
        updateData(data, "Transport", id)
          .then((success) => {
            setTableData((old) => {
              return old.map((item) => {
                if (item.id == id) {
                  return { id, ...data };
                } else return item;
              });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const columns = [
        { field: "id", headerName: "S.No.", width: 50 },
        { field: "transportType", headerName: "Transport Type", width: 130 },
        { field: "noOfSeats", headerName: "No OF Seat", width: 130 },
        { field: "price", headerName: "price", width: 130 },
        { field: "routTime", headerName: "rout Time", width: 130 },
        { field: "routTo", headerName: "Rout To", width: 130 },
        { field: "routFrom", headerName: "Rout From", width: 130 },
        {
          field: "action",
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
        {
          field: "edit",
          headerName: "edit",
          width: 130,
          renderCell: (cellValues) => {
            return (
              <Button variant="contained" onClick={() => edit(cellValues.row)}>
                edit
              </Button>
            );
          },
        },
      ];
  return (
    <div>
      transportData
      <Box height={400} width="100%">
        <DataGrid columns={columns} rows={tableData} pageSize={5} />
      </Box>
    </div>
  )
}

export default TransportData
