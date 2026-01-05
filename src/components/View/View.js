import React from 'react';
import {motion} from "framer-motion";
import "../../styles/View.css";
import { useSelector } from 'react-redux';


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
                        View
                    </>
                }
            </div>
        </div>
    )
};


export default View;