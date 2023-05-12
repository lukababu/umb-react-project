import React from "react"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNewCostByCptId } from "../api/cptCodes";

const buttonStyle = {
  border: 1,
  "&:hover": {
    border: "#ac162d",
    color: "#ac162d",
  },
}

const boxStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

function Form({ cptCodeId }) {
  const [facilityType, setFacilityType] = useState("")
  const [cost, setCost] = useState()
  const [copay, setCopay] = useState()
  const [copayError, setCopayError] = useState(false)

  const queryClient = useQueryClient()
  const updateCptCost = useMutation({
    mutationFn: (newCost) => createNewCostByCptId(newCost),
    onSuccess: data => {
      // queryClient.setQueryData(["costs", data.id], data)
      queryClient.invalidateQueries(["costs", cptCodeId], { exact: true })
    }
  })

  const handleSubmit = (cptCodeId) => {
    const newData = {
      cptCostId: cptCodeId,
      newCost: cost,
      newCopay: copay,
      newFacilityType: facilityType,
    }
    
    console.log(newData)
    updateCptCost.mutate(newData)
  }

  const handleCoPayChange = (newValue) => {
    newValue > cost ? setCopayError(true) : setCopayError(false)
    setCopay(newValue)
  }

  return(
    <Box sx={boxStyle}>
      <TextField
        autoFocus
        required
        label="Facility Type"
        variant="standard"
        sx={{ m: 1 }}
        onChange={(event) => setFacilityType(event.target.value)}
      />

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount" required>Cost</InputLabel>
        <Input
          required
          type="number"
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onChange={(event) => setCost(parseFloat(event.target.value))}
        />
      </FormControl>

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount" required>Co-pay</InputLabel>
        <Input
          required
          disabled={!cost}
          error={copayError}
          type="number"
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          value={copay}
          onChange={(event) => handleCoPayChange(parseFloat(event.target.value))}
        />
        {copayError && <FormHelperText error>Value cannot be greater than the cost!</FormHelperText>}
      </FormControl>

      <Button
        disabled={!facilityType || !cost || !copay || copayError}
        variant="contained"
        color="primary"
        size="large"
        sx={buttonStyle}
        onClick={() => handleSubmit(cptCodeId)}
      >
        ADD NEW
      </Button>
    </Box>
  )
}

export default Form