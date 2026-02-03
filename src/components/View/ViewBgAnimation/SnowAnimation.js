import React, { useEffect, useRef } from 'react';
import "../../../styles/SnowAnimation.css";


const SnowAnimation =()=>{
    const Ref = useRef();
    useEffect(()=>{
        const canv = document.getElementById("SnowCanv");
        const ctx = canv.getContext("2d");
        canv.width = 700;
        canv.height = 700;

        const Snow = [];
        const Snow_Count = 500;

        for(let i = 0 ; i<Snow_Count ; i++)
        {
            Snow.push({
                x:Math.random() * canv.width,
                y:Math.random() * canv.height,
                r:Math.random() * 2 + 1,
                speed : Math.random() + 0.1 * 3,
            });
        };

        function SnowDrop (){
            ctx.clearRect(0,0,canv.width,canv.height);
            ctx.fillStyle = "#F0F0EC";
            Snow.forEach(drop => {
                ctx.beginPath();
                ctx.arc(drop.x, drop.y , drop.r , 0 ,Math.PI * 2);
                ctx.fill();
                drop.y += drop.speed;
                if(drop.y > canv.height)
                {
                    drop.y = -drop.r;
                    drop.x = Math.random() * canv.width;
                }; 
            });
            requestAnimationFrame(SnowDrop);
        }
        SnowDrop();

    },[])


    return(
        <div className="SnowBgContainer">
            <canvas ref={Ref} id="SnowCanv">

            </canvas>
        </div>
    )
};


export default SnowAnimation;