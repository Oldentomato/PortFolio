import {Route,Routes, BrowserRouter} from "react-router-dom"
import React from "react"
import NavBar from "../src/components/views/NavBar/NavBar"
import LandingPage from "../src/components/views/LandingPage/LandingPage"
import BoardPage from "../src/components/views/BoardPage/BoardPage"
import CreatePage from "../src/components/views/CreatePage/CreatePage"
import DetailPage from "../src/components/views/DetailPage/DetailPage"
import ModifyPage from "../src/components/views/ModifyPage/ModifyPage"
import ActivitiesPage from "./components/views/ActivitiesPage/ActivitiesPage"
import "./css/App.css"
import CategoryPage from "../src/components/views/CategoryPage/CategoryPage"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="Activities" element={<ActivitiesPage/>}/>
          <Route path="Category/*" element={<CategoryPage/>}>
            <Route path=":CatID/*" element={<BoardPage />}/>
          </Route>
          <Route path="Category/:CatID/:BoardID" element={<DetailPage />} />
          <Route path="Create" element={<CreatePage/>}/>
          <Route path="Modify/:BoardID" element={<ModifyPage />}/>
        </Routes>
    </BrowserRouter>


  );
}
