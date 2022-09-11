import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils';
import { Detail, ExerciseVideos, SimilarExercises } from '../components';

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = React.useState({});
  const [exerciseVideos, setExerciseVideos] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions,
      );
      setExerciseDetail(exerciseDetailData);

      const exercisesVideosData = await fetchData(
        `${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,
        youtubeOptions,
      );
      setExerciseVideos(exercisesVideosData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  );
};
