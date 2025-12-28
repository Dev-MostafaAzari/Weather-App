import React from 'react';
import {motion} from "framer-motion";
import "../../styles/Main.css";
import Cloud from "../../assets/Cloud/Cloud1.png";
import States from '../States/States';
import View from '../View/View';

const Main = () =>{
    return(
        <div className="Main">
            <div className="MainWrapper">
                <div className="ViewPart">
                    <View/>
                </div>
                <div className="StatesPart">
                    <States/>
                </div>
            </div>
        </div>
    )
    
}

export default Main;