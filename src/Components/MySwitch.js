import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function MySwitch(props) {
    const {onChange, label} = props
  return (
    <FormGroup>
      <FormControlLabel onChange={onChange} control={<Switch defaultChecked />} label={label} />
    </FormGroup>
  );
}