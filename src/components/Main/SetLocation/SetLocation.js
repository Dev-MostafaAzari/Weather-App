import "../../../styles/SetLocation.css";
import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { alertDissmiss } from '../../../features/weather/weatherSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { GetWeather } from '../../../features/weather/weatherSlice';
import Loading from "../../Loading/Loading";

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

const SetLocation = () => {
    const [city,setCity] = useState("");
    const dispatch = useDispatch();
    const data = useSelector(state => state.weather);

    return (
        <div className="setLocation">
            <motion.div variants={AlertVariant} initial="Hide" animate={data.reject ? "Show" : "Hide"} transition="transition" className="AlertContainer">
                <div className="AlertWrapper">
                    <div className="AlertTextContainer">
                        <p>{data.rejectValue === "Rejected" ? "Somthing Went Wrong Please Try Again Later" : data.rejectValue}</p>
                    </div>
                    <div className="AlertClBtnContainer">
                        <button className="AlertClBtn" onClick={() => { dispatch(alertDissmiss()) }}><FontAwesomeIcon icon={faClose} /></button>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={SetLocationVariants} initial="Start" animate="End" className="LocationFormContainer">
                <form className="form" onSubmit={(e) => { e.preventDefault(); dispatch(GetWeather(city)); }}>
                    <h1 className="setLocationTitle">Where To Go</h1>
                    <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} required className="setLocationInput" placeholder="ex : Tehran" />
                    <motion.button type="submit" variants={data.loading ? null : SearchBtnVariants} whileHover="hover" className="setLocationButton" disabled={data.loading ? true : false}>
                        {data.loading ? <Loading/> : "Search"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}

export default SetLocation;