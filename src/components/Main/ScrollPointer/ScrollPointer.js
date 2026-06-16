import { faMouse , faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/ScrollPointer.css";
import { motion } from "framer-motion";

const ScrollPointerVariants = {
    initial :{
        y:0,
    },
    animate :{
        y : 20,
        transition:{
            duration:1.5,
            repeat : Infinity,
            repeatType:"mirror",
        }
    },
    
}
const ArrowVariants = {
    initial : {
        y:0,
    },
    animate :{
        y : 30,
        transition:{
            duration:1.5,
            repeat:Infinity,
            repeatType:"mirror",
        }
    }
}


const ScrollPointer = () => {
    return (
        <div className="ScrollPointerContainer">
            <motion.div variants={ScrollPointerVariants} animate={"animate"} className="ScrollItem"><FontAwesomeIcon icon={faMouse}/></motion.div>
            <motion.div variants={ArrowVariants} animate={"animate"} className="ScrollItem"><FontAwesomeIcon icon={faArrowDown}/></motion.div>
        </div>
    );
}
 
export default ScrollPointer;