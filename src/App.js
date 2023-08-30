import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/LandingPage";
import EditorPage from "./components/EditorPage";
import "./index.css"

export default function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route  path="/editor" element={<EditorPage/>}/>
      </Routes>
   </BrowserRouter>
  );
}