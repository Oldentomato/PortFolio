import {Route,Routes, BrowserRouter} from "react-router-dom"
import React from "react"
import NavBar from "../src/components/views/NavBar/NavBar"
import LandingPage from "../src/components/views/LandingPage/LandingPage"
import BoardPage from "../src/components/views/BoardPage/BoardPage"
import "./css/App.css"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Boards" element={<BoardPage/>}/>
        </Routes>
    </BrowserRouter>


  );
}
