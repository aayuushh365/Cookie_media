import React from 'react'
import {
  Box,
} from '@mui/material'
import Post from './Post'


const Feed = () => {
  return (
    <Box
      flex={4}
      sx={{
        position: "absolute",
        left: "250px",
        right: "400px",
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed