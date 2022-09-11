import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

export const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: {
          lg: '100px',
          xs: '20px',
        },
      }}
      p="20px">
      <Typography variant="h4" mb="30px">
        Watch {name} exercise videos
      </Typography>
    </Box>
  );
};
