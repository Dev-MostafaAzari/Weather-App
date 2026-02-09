import React, { useEffect, useLayoutEffect, useRef , useState } from 'react';
import { motion} from 'framer-motion';
import "../../../styles/ClearSkyAnimation.css";



const ClearSky = ()=>{
    const ClearSkyConRef = useRef();
    const [width , setWidth] = useState();
    useEffect(()=>{
        const ClearSkyContainerResizeHandle = ()=>{
            if ( ClearSkyConRef.current)
            {
                setWidth(ClearSkyConRef.current.offsetWidth * 50 /100);
            }
        };
        ClearSkyContainerResizeHandle();
        window.addEventListener("resize",ClearSkyContainerResizeHandle);
        return ()=> window.addEventListener("resize",ClearSkyContainerResizeHandle);
    },[])
    return(
        <div className="ClearSkyContainer" ref={ClearSkyConRef}>
            <svg id="ClearSkySvg">
                <circle cx={"51%"} cy={"20%"} r={100} stroke="Yellow" fill="Yellow" />
                {ClearSkyConRef.current ?   //RenderCloudsWhenWidthIsNotNull
                 <>
                    <motion.g id="Cloud1" fill="#ffffff" initial={{x:`${width}px`,y:"15vh",scale:2}} animate={{x:`${width + 30}px`,transition:{duration:5,ease:"linear",repeat:Infinity,repeatType:'reverse'}}} >
                        <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                        <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                        <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                        <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                    </motion.g>
                    <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width - 40}px`,y:"25vh",scale:2}} animate={{x:`${width - 70}px`,transition:{duration:5,ease:"linear",repeat:Infinity,repeatType:'reverse'}}} >
                        <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                        <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                        <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                        <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                    </motion.g>
                 </>
                : null}
            </svg>
        </div>
    )
};

export default ClearSky;
