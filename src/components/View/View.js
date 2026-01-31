import React from 'react';
import {motion} from "framer-motion";
import "../../styles/View.css";
import { useSelector } from 'react-redux';
import BgAnimation from './ViewBgAnimation/ViewBgAnimation';

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
                                <BgAnimation/>
                                <div className="ViewTitleContainer">
                                    <motion.div variants={ViewTitleVariants} initial="initial" whileInView="animate">
                                        <motion.h1 variants={ViewTitleVariants} className="ViewTitle">Temperature:<motion.span variants={ViewTitleVariants}>{data.weather.data.main.temp}℃</motion.span></motion.h1>
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