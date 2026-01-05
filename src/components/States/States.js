import React from 'react';
import {motion} from "framer-motion";
import "../../styles/States.css";
import { useDispatch, useSelector } from 'react-redux';
import { isLocation } from '../../features/weather/weatherSlice';

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
};

const States=()=>{

    const dispatch = useDispatch();
    const data = useSelector(state => state.weather);
    const loadingData = useSelector(state=> state.loading);
    return(
        <div className="StatsMain">
            <div className="StatsWrapper">
                {data.loading ?
                    <motion.div variants={loadingData.loadingVariants} initial="initial" animate="animate" className="LoadingContainer">
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                        <motion.div variants={loadingData.loadingVariants}  className="Dot"></motion.div>
                    </motion.div>
                :
                    <>
                        <div className="SearchContainer">
                            <motion.button initial={{y:-25,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5}}} whileHover={{backgroundColor:"Green",scale:1.1,transition:{type:"spring",stiffness:150}}}
                            className="SearchBtn" onClick={()=>{dispatch(isLocation())}}>Search</motion.button>
                        </div>
                        <div className="StatsContainer">
                            <div className="StatsHeader">
                                <motion.h1 initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:2}}} className="StatsTitle">Title Here</motion.h1>
                            </div>
                            <motion.hr initial={{width:0}} whileInView={{width:"90%",transition:{type:"spring",stiffness:50}}} className="hr"/>
                            <div className="StatsData">
                                <motion.ul variants={StatsDataVariants} initial="start" whileInView="end" className="WeatherData">
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>Humidity</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>Wind Speed</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>Cloudiness</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>Feels Like</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>Pressure</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>Visibility</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={StatsDataVariants}>
                                        <div className="ItemData">
                                            <h2>UV Index</h2>
                                            <span>30</span>
                                        </div>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
};


export default States;