import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtons(props) {
    const {onChange, name, rBValue} = props
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{name}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name={name}
      >
      {rBValue.map((e,i)=>{
        console.log('e')
      return <FormControlLabel value={e.value} key={i} onChange={onChange} control={<Radio />} label={e.value} />
    })}
      </RadioGroup>
    </FormControl>
  );
}