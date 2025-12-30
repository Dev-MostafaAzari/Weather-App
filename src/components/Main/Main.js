import React from 'react';
import {motion} from "framer-motion";
import "../../styles/Main.css";
import Cloud from "../../assets/Cloud/Cloud1.png";
import States from '../States/States';
import View from '../View/View';
import { useDispatch, useSelector } from 'react-redux';
import { isLocation } from '../../features/weather/weatherSlice';


const Main = () =>{
    const data = useSelector(state => state.weather);
    const dispatch = useDispatch();
    return(
        <div className="Main">
            {data.setLocation ?

                <div className="MainWrapper">
                    <div className="ViewPart">
                        <View/>
                    </div>
                    <div className="StatesPart">
                        <States/>
                    </div>
                </div>

            :
                <div className="MainWrapper">
                    <div className="setLocation">
                        <div className="LocationFormContainer">
                            <div className="form">
                                <h1 className="setLocationTitle">Where do you live</h1>
                                <input type="text" className="setLocationInput" placeholder="ex : Tehran"/>
                                <button type="button" className="setLocationButton" onClick={()=>{dispatch(isLocation())}}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
    
}

export default Main;