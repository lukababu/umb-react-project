import './App.css'
import React from 'react'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { getCptCodes, getCptCostsById } from './api/cptCodes';
import Grid from '@mui/material/Grid';
import Dropdown from './cpt/Dropdown';
import AverageCost from './cpt/AverageCost';
import CostList from './cpt/CostList';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from './cpt/Form';

function App() {
  const [cptCodeId, setCptCodeId] = useState('');

  // Enabling Dark Mode according to system-wide setting
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#ac162d',
        dark: '#ffffff',
      },
    },
  });
  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '350px',
    justifyContent: 'space-between'
  }

  const cptCodes = useQuery({
    queryKey: ['cptCodes'],
    queryFn: getCptCodes
  })
  const cptCosts = useQuery({
    queryKey: ['costs', cptCodeId],
    enabled: Number.isInteger(cptCodeId),
    queryFn: () => getCptCostsById(cptCodeId)
  })

  return (
    <ThemeProvider theme={theme}>
      <div>
        <a href="https://healthcare.utah.edu/" target="_blank" rel="noreferrer">
          <img src="https://healthcare.utah.edu/themes/custom/theme_uou_clinical/logo.svg" className="logo uhealth" alt="UHealth logo" />
        </a>
      </div>
      <h1>
        <Tooltip placement='top' title="Current Procedural Terminology, more commonly known as CPT, refers to a medical code set created and maintained by the American Medical Association — and used by physicians, allied health professionals, nonphysician practitioners, hospitals, outpatient facilities, and laboratories to represent the services and procedures they perform.">
          <span className='underline'>CPT</span>
        </Tooltip> Average Cost
      </h1>
      <Grid container spacing={2} alignItems="center" justifyContent="flex-start">
        <Grid item xs={6} sx={gridStyle}>
          <Dropdown
            loading={cptCodes.isLoading}
            cptCodes={cptCodes.data}
            cptCodeId={cptCodeId}
            setCptCodeId={cptCodeId => setCptCodeId(cptCodeId)}
          />
          { cptCodeId && <Form cptCodeId={cptCodeId} />}
        </Grid>
        <Grid item xs={6} sx={gridStyle}>
          <CostList
            loading={cptCosts.isFetching}
            costs={cptCosts.data}
            cptCodeId={cptCodeId}
          />
          <AverageCost
            loading={cptCosts.isLoading}
            costs={cptCosts.data}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
