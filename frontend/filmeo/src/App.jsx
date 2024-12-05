//import { useState, useEffect } from 'react'
import Search from './components/search/Search'
import NavBar from './components/navbar/Navbar'
import Serieshow from './components/serieshow/Serieshow.jsx';
import { Routes, Route } from "react-router";
import './App.css'

 function App() {

  return (
    <>
      <NavBar />
    <Routes>
    <Route path="/" element={<Search />} />
    <Route path="/serieshow/:show" element={<Serieshow />}/>
  </Routes>
    </>
    
      

  )
}

export default App
