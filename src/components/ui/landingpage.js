
import { cn } from "../../utils/cn.js";
import React from "react";
import Hover from "./hover.js";
import Phone from "./phone.js";
import { motion } from "framer-motion";
import Tab from "../tab.js"
import Navbarstateup from "../../navbarstateup.js"
import { createNoise3D } from "simplex-noise";
import { LampContainer } from "./lamp.js";
const { useEffect, useRef, useState } = React;


export function LampDemo() {
  return (
    <div className="bg-black h-full">
   
  <Navbarstateup />
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Learn Link <br /> <div className="text-2xl mt-5">Learn the right way</div>
      </motion.h1>
    </LampContainer>
    {/* <Phone /> */}
    <div className="flex" >
      <Tab />
   <Hover />
  
   </div>
    
    

    </div>
  );
};

export default  LampDemo ;