import React from 'react';
import {motion} from "framer-motion";
import "../../styles/States.css";

const StatsDataVariants = {
    start:{
        opacity:0,
        x:-20,
    },
    end:{
        opacity:1,
        x:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}



const States=()=>{
    return(
        <div className="StatsMain">
            <div className="StatsWrapper">
                <div className="SearchContainer">
                    <motion.button initial={{y:-25,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5}}} whileHover={{backgroundColor:"Green",scale:1.1,transition:{type:"spring",stiffness:150}}}
                     className="SearchBtn">Search</motion.button>
                </div>
                <div className="StatsContainer">
                    <div className="StatsHeader">
                        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:2}}} className="StatsTitle">Title Here</motion.h1>
                    </div>
                    <motion.hr initial={{width:0}} whileInView={{width:"90%",transition:{type:"spring",stiffness:50}}} className="hr"/>
                    <div className="StatsData">
                        <motion.ul variants={StatsDataVariants} initial="start" whileInView="end" className="WeatherData">
                            <motion.li variants={StatsDataVariants}>Humidity:</motion.li>
                            <motion.li variants={StatsDataVariants}>Wind Speed:</motion.li>
                            <motion.li variants={StatsDataVariants}>Cloudiness:</motion.li>
                            <motion.li variants={StatsDataVariants}>Feels Like:</motion.li>
                            <motion.li variants={StatsDataVariants}>Pressure:</motion.li>
                            <motion.li variants={StatsDataVariants}>Visibility:</motion.li>
                            <motion.li variants={StatsDataVariants}>UV Index:</motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default States;