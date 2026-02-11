import React from 'react'
import Home from './Pages/Home.jsx'
import Auth from './Pages/Auth.jsx'
import {Routes ,Route} from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentUser } from './services/api.js';

export const serverUrl = "http://localhost:8000"

const App = () => {
  useEffect(()=>{
      getCurrentUser();
  },[])
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
  )
}
 
export default App
