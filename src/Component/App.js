import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import News from "./News"
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import Calculator from "./Calculator";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trucking from "./Trucking";
import AirCargo from "./AirCargo";
import OceanCargo from "./OceanCargo";
import Couriercargo from "./Couriercargo"
import Login from "./Login";
import LogReg from "./LogReg";
import Register from "./Register";



function App () {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
       <Route path="service" element={<Service />} />
       <Route path="about" element={<About />} /> 
      <Route path="news" element={<News />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="trucking" element={<Trucking />} />
      <Route path="aircargo" element={<AirCargo />} />
      <Route path="oceancargo" element={<OceanCargo />}/>
      <Route path="Couriercargo" element={<Couriercargo />} />
      <Route path="LogReg" element={<LogReg />} />
      <Route path="register" element= {<Register />} />
      <Route path="login" element= {<Login />} />


    </Route>
  </Routes>
</BrowserRouter>
      
    
   
  )
}

export default App;