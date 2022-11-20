import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const MyDataGrid = () => {

    const deleteRow =()=>{

    }

    const columns = [
        { field: "id", headerName: "S.No.", width: 50 },
        { field: "selectCourse", headerName: "Course", width: 130 },
        { field: "selectCountry", headerName: "Country", width: 190 },
        { field: "selectedCities", headerName: "Cities", width: 190 },
        { field: "isFormOpen", headerName: "Form Open", width: 190 },
        { field: "admissionStartDate", headerName: "Start Date", width: 190 },
        { field: "admissionEndDate", headerName: "End Date", width: 190 },
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
      ];

      const rows = [
        {
            id: 1,
            selectCourse: 'web'
        },
        {
            id: 2,
            selectCourse: 'web'
        },
        {
            id: 3,
            selectCourse: 'web'
        },
      ]
    //   const [data, setData] = useState([]);
    //   const database = getDatabase(app);
    //   const gettingResultDataFromFireBase = () => {
    //     const reference = ref(database, `formControl`);
    //     onValue(reference, (e) => {
    //       if (e.exists()) {
    //         let value = e.val();
    //         let values = Object.values(value);
    //         let keys = Object.keys(value);
    //         keys.map((e) => {
    //           setData(
    //             values.map((x, i) => {
    //               return {
    //                 ...x,
    //                 uid: e,
    //                 id: i + 1,
    //               };
    //             })
    //           );
    //         });
    //       }
    //     });
    //   };
    
    //   const deleteRow = (event) => {
    //     let uid = event.uid;
    //     const refrence = ref(database, `formControl/${uid}`);
    //     remove(refrence);
    //   };
    

    //   const mapTheRow = () => {
    //     let allRow = [];
    //     val.map((row, index) => {
    //       row.map((e, i) => {
    //         allRow.push({
    //           ...e,
    //           id: allRow.length + 1,
    //           quizoption: e.quizoption.map((e, i) => e.txt),
    //           correctAnswer: e.quizoption
    //             .filter((e, i) => e.correctAnswer === true)
    //             .map((val, ind) => val.txt),
    //         });
    //       });
    //     });
    //     setGridRows(allRow);
    //   };
    //   console.log('val',val)
    //   useEffect(() => {
    //     mapTheRow();
    //   }, [val]);


  return (
    <div>MyDataGrid
    <Box height={400} width="100%">
        <DataGrid columns={columns} rows={rows} pageSize={5} />
      </Box>
    </div>
  )
}

export default MyDataGrid