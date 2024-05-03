// App.js 
// Renders the GameBoardComponent 
import "./App.css"; 
import { gsap } from "gsap";
import React, { useState, useEffect } from "react";
import GameBoard from "./memorygame/Board"; 
function App() { 
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mouseleave", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 0,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
    window.addEventListener("mouseenter", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 1,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);
    return ( 
        <div className=""> 
         <div className="ball blur-3xl bg-purple-400/50 w-96 h-96 fixed top-0 left-0 rounded-full"></div>
<div className="z-50">
            <GameBoard /> 
            </div>
        </div> 
    ); 
} 
  
export default App; 