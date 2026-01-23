import React, { useEffect, useRef } from 'react';
import "../../../styles/ViewBgAnimation.css";



const BgAnimation = ()=>{
    useEffect(()=>{
       




    },[])

    
    
    //rainEffect
    const ref = useRef();
    


    return(
        <div id="BgAnim" className="BgContainer">
            <canvas ref={ref} id="Canv">

            </canvas>
        </div>
        
    )
};

export default BgAnimation;