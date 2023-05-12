import React from "react"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function CostRow({facilityType, cost, copay}) { 
  return(
    <ListItem disablePadding>
      <ListItemText
        primary={facilityType}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              ${cost}
            </Typography>
            {' '}(${copay} — Co-pay)
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default CostRow