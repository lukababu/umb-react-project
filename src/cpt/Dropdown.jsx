import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';

function Dropdown({loading, cptCodes, cptCodeId, setCptCodeId}) {
  const handleChange = (newCptSelection) => {
    setCptCodeId(newCptSelection)
  }

  return (
    <FormControl fullWidth disabled={loading === 'loading'}>
      <InputLabel id="select-cpt">CPT Code</InputLabel>
      <Select
        labelId="select-cpt"
        id="cpt-select"
        value={cptCodeId}
        label="CPT Code"
        onChange={(event) => handleChange(event.target.value)}
      >
        {cptCodes?.map((el) => (      
          <Tooltip title={el.description} key={el.id} value={el.id} placement='right-end'>
            <MenuItem>
              {el.code}
            </MenuItem>
          </Tooltip>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown