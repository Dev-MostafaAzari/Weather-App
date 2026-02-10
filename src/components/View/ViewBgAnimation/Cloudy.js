import React, { useEffect,useRef,useState } from 'react';
import {motion} from "framer-motion";
import "../../../styles/CloudySkyAnimation.css";

const Cloudy = ()=>{
    const [width , setWidth]=useState();
    const CloudyRef = useRef();
    useEffect(()=>{
        const CloudyResizeHandle = ()=>{
            if(CloudyRef.current)
            {
                setWidth(CloudyRef.current.offsetWidth);
            }
        };
        CloudyResizeHandle();
        window.addEventListener("resize",CloudyResizeHandle);
        return ()=>window.addEventListener("resize",CloudyResizeHandle);
    },[]);
    return(
        <div className="CloudyContainer" ref={CloudyRef}>
            <svg id="CloudySVG">
                {CloudyRef.current ? 
                    <>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/4}px`,y:"5vh",scale:"3",opacity:"0.8"}} animate={{x:`${width/2}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width - width/3}px`,y:"15vh",scale:"3",opacity:"0.8"}} animate={{x:`${width/3}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/6}px`,y:"20vh",scale:"3",opacity:"0.8"}} animate={{x:`${width - width/6}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.circle  stroke="Yellow" initial={{fill:"Yellow",cx:`${width * 50 /100}px`,cy:"17vh",r:"75px"}} animate={{r:"65px",transition:{duration:3,ease:"easeIn",repeat:Infinity,repeatType:"reverse"}}}/>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/3}px`,y:"7vh",scale:"3",opacity:"0.8"}} animate={{x:`${width/5}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/4}px`,y:"16vh",scale:"3",opacity:"0.8"}} animate={{x:`${width}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`0px`,y:"23vh",scale:"3",opacity:"0.8"}} animate={{x:`${width/3}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width - width/7}px`,y:"5vh",scale:"3",opacity:"0.8"}} animate={{x:`0px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`0px`,y:"15vh",scale:"3",opacity:"0.8"}} animate={{x:`${width}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/6}px`,y:"20vh",scale:"3",opacity:"0.8"}} animate={{x:`${width/3}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width}px`,y:"7vh",scale:"3",opacity:"0.8"}} animate={{x:`0px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/4}px`,y:"16vh",scale:"3",opacity:"0.8"}} animate={{x:`${width}px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                        <motion.g id="Cloud2" fill="#ffffff" initial={{x:`${width/2}px`,y:"23vh",scale:"3",opacity:"0.8"}} animate={{x:`0px`,transition:{duration:Math.random()*100+40,ease:"linear",repeat:Infinity,repeatType:"reverse"}}}>
                            <motion.circle cx={"70"} cy={"70"} r={"20"}/>
                            <motion.circle cx={"90"} cy={"60"} r={"25"}/>
                            <motion.circle cx={"115"} cy={"70"} r={"20"}/>
                            <motion.rect x={"70"} y={"70"} width={"45"} height={"20"}/>
                        </motion.g>
                    </>
                    :
                    null
                }
            </svg>
        </div>
    )
};



export default Cloudy;