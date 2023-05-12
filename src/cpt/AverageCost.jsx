import React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function AverageCost({loading, costs}) {
  const [average, setAverage] = useState()

  useEffect(() => {
    let sum = 0
    if(!costs) return

    costs.forEach((el) => {
      sum += el.cost
    })

    setAverage(sum/costs.length)
  }, [costs])

  return(
    <>
        {!loading && costs &&
        <Typography
          variant="h5"
          component="h5"
        >
          The Average is: {average}
        </Typography>}
    </>
  )
}

export default AverageCost