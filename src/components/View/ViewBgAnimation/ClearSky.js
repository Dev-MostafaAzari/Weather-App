import React from 'react';
import { motion } from 'framer-motion';
import "../../../styles/ClearSkyAnimation.css";



const ClearSky = ()=>{
    return(
        <div className="ClearSkyContainer">
            <svg id="ClearSkySvg">
                <circle cx={"51%"} cy={"20%"} r={100} stroke="Yellow" fill="Yellow" />
                <motion.g id="Cloud1" fill="#ffffff" initial={{x:600,y:300,scale:2}} animate={{x:550,transition:{duration:20,ease:"linear",repeat:Infinity,repeatType:'reverse'}}} >
                    <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                    <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                    <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                    <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                </motion.g>
                <motion.g id="Cloud2" fill="#ffffff" initial={{x:900,y:100,scale:2}} animate={{x:950,transition:{duration:20,ease:"linear",repeat:Infinity,repeatType:'reverse'}}} >
                    <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                    <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                    <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                    <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                </motion.g>
            </svg>
        </div>
    )
};

export default ClearSky;
