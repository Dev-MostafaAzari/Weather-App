import "../../styles/Main.css";
import States from '../States/States';
import View from '../View/View';
import { useSelector } from 'react-redux';
import SetLocation from './SetLocation/SetLocation';
import ScrollPointer from "./ScrollPointer/ScrollPointer";




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
                    <section className="ViewPart">
                        <View/>
                        <ScrollPointer/>
                    </section>
                    <section className="StatesPart">
                        <States/>
                    </section>
                </div>
            }
        </div>
    )
    
}

export default Main;