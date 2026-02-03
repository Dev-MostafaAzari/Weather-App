import React, { useEffect, useRef } from 'react';
import "../../../styles/RainAnimation.css";



const RainAnimation = ()=>{
    const ref = useRef();
    useEffect(()=>{
        const CanvTag = ref.current;
        const ctx = CanvTag.getContext("2d");
        CanvTag.width = 700;
        CanvTag.height = 700;
        const drops = [];
        const DropsCount = 500;

        for (let i = 0 ; i < DropsCount ; i++)
        {
            drops.push({
                x:Math.random() * CanvTag.width,
                y:Math.random() * CanvTag.height,
                length : Math.random() * 20 + 5,
                speed : Math.random() * 4 + 4,
            });
        };
        function drawRain(){
        ctx.clearRect(0,0,CanvTag.width,CanvTag.height);
        ctx.strokeStyle = "rgba(225,225,224,0.5)";
        ctx.lineWidth = "1";
        drops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x,drop.y);
            ctx.lineTo(drop.x,drop.y + drop.length);
            ctx.stroke();
            drop.y += drop.speed;
            if(drop.y > CanvTag.height)
            {
                drop.y = -drop.length;
                drop.x=Math.random()*CanvTag.width;
            }
        });
        requestAnimationFrame(drawRain);
    };
    drawRain();
    },[])
    
    return(
        <div id="BgAnim" className="BgContainer">
            <canvas ref={ref} id="Canv">

            </canvas>
        </div>
        
    )
};

export default RainAnimation;