import "../../styles/Main.css";
import States from '../States/States';
import View from '../View/View';
import { useSelector } from 'react-redux';
import SetLocation from './SetLocation/SetLocation';




const Main = () =>{
    const data = useSelector(state => state.weather);
    return(
        <div className="Main">
            {data.setLocation ?
                <div className="MainWrapper">
                    <SetLocation/>
                </div>
                :
                <div className="MainWrapper">
                    <div className="ViewPart">
                        <View/>
                    </div>
                    <div className="StatesPart">
                        <States/>
                    </div>
                </div>
            }
        </div>
    )
    
}

export default Main;