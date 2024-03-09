import React from 'react'
import FormComponent from './components/FormComponent.tsx'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

type Props = {}

const MainScreen = (props: Props) => {

  return (
    <Box
      style={{
        height: '100vh',
        backgroundColor: 'cyan',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <FormComponent />

    </Box>
  )

}

export default MainScreen