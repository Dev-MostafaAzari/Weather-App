import React from 'react';
import {motion} from "framer-motion";
import "../../styles/View.css";
import { useSelector } from 'react-redux';
import RainAnimation from './ViewBgAnimation/RainAnimation';
import SnowAnimation from './ViewBgAnimation/SnowAnimation';

const ViewTitleVariants={
    initial:{
        opacity:0,
        x:-20,
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:1.5,
        },
    },
};

const View = ()=>{
    const data = useSelector(state=>state.weather);
    const loadingData = useSelector(state=>state.loading);
    const WeatherCheck = (data)=>{
        if(200<data && data<532)    //Rain
        {
            return <RainAnimation/>;
        }else if(599<data && data<623)   //Snow
        {
            return <SnowAnimation/>;
        }else 
        {
            return "null";
        }
    };

    return(
        <div className="ViewMain">
            <div className="ViewWrapper">
                {data.loading ?
                    <motion.div variants={loadingData.loadingVariants} initial="initial" animate="animate" className="LoadingContainer">
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                    </motion.div> 
                :
                    <>
                        <div className="ViewContainer">
                            <div className="WeatherEffectContainer">
                                {WeatherCheck(data.weather.data.weather[0].id)}    {/* WeatherCheck */}
                                <div className="ViewTitleContainer">
                                    <motion.div variants={ViewTitleVariants} className="ViewTitleInnerContainer" initial="initial" whileInView="animate">
                                        <motion.h1 variants={ViewTitleVariants} className="ViewTitle">Temperature:<motion.span variants={ViewTitleVariants}>{data.weather.data.main.temp}℃</motion.span></motion.h1>
                                        <motion.div className="ViewTitleTempMinMax">
                                            <motion.h2>Max:<motion.span>{data.weather.data.main.temp_max}℃</motion.span></motion.h2>
                                            <motion.h2>Min:<motion.span>{data.weather.data.main.temp_min}℃</motion.span></motion.h2>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
};


export default View;