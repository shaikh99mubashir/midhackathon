import { Button } from '@mui/material'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const MyButton = (props) => {
    const { value, label, variant, onChange, type, sx, isLoading, disabled, onClick} = props;
  return (
    <Button
        variant={variant}
        onChange={onChange}
        type={type}
        value={value}
        sx={sx}
        disabled={disabled}
        onClick={onClick}
        fullWidth
    >{isLoading?<CircularProgress style={{color:'black',height:20,width:20}}/> : label}</Button>
    )
}

export default MyButton