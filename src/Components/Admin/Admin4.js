import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import DropdownSelect from "../DropdownSelect";
const Admin4 = () => {
  const [dataState, setDataState] = useState([]);
  const [category, setCategory] = useState("");

  const getData = useCallback(async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setDataState(data);
      let filterCategory = data.data?.map((item) => item.category);
      filterCategory = [...new Set([...filterCategory])];
      setCategory([...filterCategory]);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  console.log('category', category)
  return (
    <>
    <div>Admin4</div>

    <DropdownSelect id={category} status='dbValue'/>


    </>
  )
}

export default Admin4