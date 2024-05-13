import React from 'react'
import AppLayout from '../components/Layout/AppLayout';
import { Box, Typography } from '@mui/material';
import { greyColor } from '../components/constants/color';

const Home = () => {
  return (
   
  <Box bgcolor={greyColor} height={"100%"}>
    <Typography p={2} variant="h5">
      select a friend to chat</Typography>
  </Box>
    
  )
}

export default AppLayout()(Home);