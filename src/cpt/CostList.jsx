import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import CostRow from './CostRow';

const boxStyle = {
  width: '100%',
}

function CostList({loading, costs}) {
  return (
    <Box sx={boxStyle}>
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
        {costs ? 'Cost List' : 'Select CPT Code from dropdown to begin!'}
      </Typography>
      {loading && "Loading..."}

      {costs && <List sx={{overflow: 'auto', '& ul': { padding: 0 }, border: 1, minHeight:200, maxHeight: 200}}>
        {costs?.map((el) => 
          <CostRow
            key={el.id}
            facilityType={el.facilityType}
            cost={el.cost}
            copay={el.copay}
          />
        )}
      </List>}
    </Box>
  )
}

export default CostList