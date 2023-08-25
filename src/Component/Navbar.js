import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Icon } from '@iconify/react';
import Login from "./Login";

function Navbar () {
  const [icon, setIcon ] = useState (false);
  const [show, setShow] = useState ("nav-1")
     function nav ()  {
         return (
          setIcon (!icon)
         )    
  }

    function nav2 () {
       if (show === "nav-1") {
         
          setShow ("nav-active");
        
        
       } else {
        setShow("nav-1")
       }

       
    }

    const [textbox, setTextbox] = useState ("searchinput");

    function searchbox () {
       if(textbox === "searchinput") {
         return (
            setTextbox ("searchinput2")
         )
       } else {
         return (
            setTextbox ("searchinput")
         )
         }
      
   }



   
      
       
     
   
   
    
  return (
      <div className="cargoNav">

        
        <nav className="nav">
       <div className="cargoinfo">
       <a href="/"><Icon icon="subway:world" className="logo" /></a>
        <span className="logoname">SPEEDY-SPELL</span>
        
       </div>
        
        <ul className={show} >
        
         <li> <Link className="navli" to="/">HOME</Link> </li> 
         <li><Link className="navli" to="/service">SERVICES</Link></li> 
         <li><Link className="navli" to="/about">ABOUT US</Link></li>
         {/* <li><Link className="navli" to="/news">BLOG/NEWS</Link></li> */}
         <li><Link className="navli" to="/shop">SHOP</Link></li>
         <li><Link className="navli" to="/contact">CONTACT</Link></li>
         <div className="navlog">
         <li><Link className="navli2" to= "/register">Register</Link></li>
         <li><Link className="navli" to= "/login">Login</Link></li>
         </div>
         
       
         <div className="search">
        <input placeholder="🔍    Search" className={textbox}></input>
        <button onClick={searchbox}>🔍</button>
        </div>
        
        </ul>
       
        
          <div onClick={nav2} >
         <div className="navIcon" onClick={nav}  >
         {icon ? <FaTimes />  : <FaAlignJustify /> }
         
         </div>
        
        </div>
        
        
       
       </nav>
       <Outlet />
        </div>
  )
}

export default Navbar;
    


