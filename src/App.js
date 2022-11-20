import logo from "./logo.svg";
import "./App.css";
import Appbar from "./Components/Appbar";
import PersistentDrawerLeft from "./Components/PersistentDrawerLeft";
import DetailedCard from "./Components/DetailedCard";
import MediaCard from "./Components/MediaCard";
import DropdownSelect from "./Components/DropdownSelect";
import MultiSelectDropdown from "./Components/MultiSelectDropdown";
import MyTextField from "./Components/MyTextField";
import MyButton from "./Components/MyButton";
import MyCarousel from "./Components/MyCarousel";
import image from "./Images/image.jpg";
import Avatar from "./Components/MyAvatar";
import MyDatePicker from "./Components/MyDatePicker";
import { Box } from "@mui/material";
import MyModal from "./Components/MyModal";
import MyToolTip from "./Components/MyToolTip";
import MyChip from "./Components/MyChip";
import MyDataGrid from "./Components/MyDataGrid";
import Routing from "./Components/Routing";
import RadioButtons from "./Components/RadioButton";
import { useState } from "react";
import MyCheckBox from "./Components/MyCheckBox";
import MySwitch from "./Components/MySwitch";
import { Provider } from "react-redux";
import store from "./Components/Redux/ConfigerStore";
// import { DataGrid } from "@mui/x-data-grid";

function App() {
  // const [radioValue, setRadioValue] = useState('')
  // console.log('checkBoxValue', checkBoxValue)
  const [switchValue, setSwitchValue] = useState('')
  // console.log('setSwitchValue', switchValue)
  // const id = ["karachi", "lahore"];
  // const radioButton = [
  //   {
  //     value: "history",
  //   },
  //   { value: "scicence" },
  //   { value: "Maths" },
  // ];
  const checkedButton = [
    {
      value: "history",
    },
    { value: "scicence" },
    { value: "Maths" },
  ];
  return (
    <>
    <Provider store={store}>
    <Routing />
    </Provider>
      {/* <Appbar/> */}
      {/* <PersistentDrawerLeft/> */}
      {/* <DetailedCard/> */}
      {/* <MediaCard/> */}
      {/* <DropdownSelect id={id}/> */}
      {/* <MultiSelectDropdown id={id}/> */}
      {/* <MyTextField label='text'/> */}
      {/* <MyButton label='button' variant='contained' /> */}
      {/* <MyCarousel img1={image} img3={image}/> */}
      {/* <Avatar img={image} sx={{width:200, height:200}}/> */}
      {/* <MyDatePicker/> */}
      {/* <MyModal/> */}
      {/* <MyToolTip/>   */}
      {/* <MyChip/> */}
      {/* <Box sx={{height:400}}>

    <MyDataGrid/>
    </Box> */}
      {/* <RadioButtons name="zain" rBValue={radioButton} onChange={(e)=>setRadioValue(e.target.value)} /> */}
      {/* <MyCheckBox name='zain' cBValue={checkedButton} onChange={(e)=> setCheckBoxValue(e.target.checked)}/> */}
      {/* <MySwitch label='zain' onChange={(e)=> setSwitchValue(e.target.checked)}/> */}
    </>
  );
}

export default App;
