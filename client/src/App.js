import {Route,Routes, BrowserRouter} from "react-router-dom"
import React from "react"
import NavBar from "../src/components/views/NavBar/NavBar"
import LandingPage from "../src/components/views/LandingPage/LandingPage"
import BoardPage from "../src/components/views/BoardPage/BoardPage"
import "./css/App.css"
import CategoryPage from "../src/components/views/CategoryPage/CategoryPage"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="Category/*" element={<CategoryPage/>}>
            <Route path=":CatID" element={<BoardPage />}/> 
          </Route>
        </Routes>
    </BrowserRouter>


  );
}
