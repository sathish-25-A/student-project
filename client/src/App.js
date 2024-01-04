import React from "react"
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from "./Add"
import Edit from "./Edit"


function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Add" element={<Add />} />
    <Route path="/edit/:id" element={<Edit />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
