import React from 'react'

import { Box } from '@mui/material'
import { Exercises, MainBanner, SearchExercises } from '../components'

export const Home = () => {
  const [exercises, setExercises] = React.useState([]);
  const [bodyPart, setBodyPart] = React.useState('all');
  console.log(bodyPart)
  return (
    <Box>
      <MainBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}
