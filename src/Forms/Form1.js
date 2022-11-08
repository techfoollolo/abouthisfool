import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function Form1() {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch'},
    }}
    noValidate
    autoComplete="off"
    className="academy-form"
  >
    <div className='academy-inner-form-area'>
      <div className='academyFormHeader'>Form 1</div>
    <TextField
        required
        id="outlined-required"
        label="Student Name"
        // defaultValue="Hello World"
      />
      <TextField
        // disabled
        id="outlined-disabled"
        label="Injury Type"
        defaultValue="Leg"
      />
      <TextField
      required
        id="outlined-password-input"
        label="Injury Reason"
        // type="password"
        // autoComplete="current-password"
      />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id="outlined-search" label="Search field" type="search" />
      <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
      />
        <Button variant="outlined" size="medium" className='academyButton'>
          Submit
        </Button>
    </div>
      
    
    </Box>
  )
}

export default Form1