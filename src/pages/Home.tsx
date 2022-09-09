import React from 'react'

import { Box } from '@mui/material'
import { Exercises, MainBanner, SearchExercises } from '../components'

export const Home = () => {
  return (
    <Box>
      <MainBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}
