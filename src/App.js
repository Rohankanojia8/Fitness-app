import React from 'react'
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom'
import { Box } from '@mui/system';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
  
   <Box width="400px" sx={{width:{xl:'1378px'}}} m='auto'>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
     </Routes>
     <Footer/> 
   </Box>

  );
}

export default App;
