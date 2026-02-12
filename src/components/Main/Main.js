import React, { useState } from 'react';
import {motion} from "framer-motion";
import "../../styles/Main.css";
import Cloud from "../../assets/Cloud/Cloud1.png";
import States from '../States/States';
import View from '../View/View';
import { useDispatch, useSelector } from 'react-redux';
import {alertDissmiss } from '../../features/weather/weatherSlice';
import { GetWeather } from '../../features/weather/weatherSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const SetLocationVariants = {
    Start:{
        opacity:0,
        y:-100
    },
    End:{
        opacity:1,
        y:0,
        transition:{
           type:"spring",
           stiffness:100,
        }
    },
};

const SearchBtnVariants = {
    hover:{
        backgroundColor:"Green",
        color:"White",
        scale:1.1,
        transition:{
            duration:0.5,
        }
    }
};

const AlertVariant = {
    Hide:{
        x:-150,
        opacity:0,
    },
    Show:{
        x:0,
        opacity:1,
    },
    transition : {
        duration:1,
    },
}


const Main = () =>{
    const [city,setCity] = useState("");
    const data = useSelector(state => state.weather);
    const dispatch = useDispatch();
    return(
        <div className="Main">
            {data.setLocation ?
                <div className="MainWrapper">
                    <div className="setLocation">
                        <motion.div variants={AlertVariant} initial="Hide" animate={data.reject ? "Show" : "Hide"} transition="transition" className="AlertContainer">
                            <div className="AlertWrapper">
                                <div className="AlertTextContainer">
                                    <p>{data.rejectValue=="Rejected" ? "Please Enter a valid city name": data.rejectValue}</p>
                                </div>
                                <div className="AlertClBtnContainer">
                                    <button className="AlertClBtn" onClick={()=>{dispatch(alertDissmiss())}}><FontAwesomeIcon icon={faClose}/></button>
                                </div>
                            </div>
                        </motion.div> 
                        <motion.div variants={SetLocationVariants} initial="Start" animate="End" className="LocationFormContainer">
                            <form className="form" onSubmit={(e)=>{e.preventDefault();dispatch(GetWeather(city));}}>
                                <h1 className="setLocationTitle">Where do you live</h1>
                                <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} required className="setLocationInput" placeholder="ex : Tehran"/>
                                <motion.button type="submit" variants={SearchBtnVariants} whileHover="hover" className="setLocationButton">Search</motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
                :
                <div className="MainWrapper">
                    <div className="ViewPart">
                        <View/>
                    </div>
                    <div className="StatesPart">
                        <States/>
                    </div>
                </div>
            }
        </div>
    )
    
}

export default Main;