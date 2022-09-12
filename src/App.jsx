import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


import { Navbar, Footer } from './components';
import { Home, ExerciseDetail } from './pages';

import './App.css';
import { ViewTimeline } from '@mui/icons-material';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/gym_app" element={<Home />} />
        <Route path="/gym_app/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
