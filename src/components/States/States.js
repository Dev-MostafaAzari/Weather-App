import React from 'react';
import {motion} from "framer-motion";
import "../../styles/States.css";

const States=()=>{
    return(
        <div className="StatsMain">
            <div className="StatsWrapper">
                <div className="SearchContainer">
                    <button className="SearchBtn">Search</button>
                </div>
                <div className="StatsContainer">
                    <div className="StatsHeader">
                        <h1 className="StatsTitle">Title Here</h1>
                    </div>
                    <hr className="hr"/>
                    <div className="StatsData">
                        <ul className="WeatherData">
                            <li>Humidity:</li>
                            <li>Wind Speed:</li>
                            <li>Cloudiness:</li>
                            <li>Feels Like:</li>
                            <li>Pressure:</li>
                            <li>Visibility:</li>
                            <li>UV Index:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default States;