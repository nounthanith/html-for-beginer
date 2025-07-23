import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;