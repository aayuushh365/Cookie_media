import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack , Typography } from "@mui/material";

const App = () => {
 return (
   <Box>
     <Navbar />
     <Sidebar />
      <Feed />
      <Rightbar />
   </Box>
 );
};

export default App;
