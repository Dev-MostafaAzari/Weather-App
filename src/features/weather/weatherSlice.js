import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setLocation : true,
    loading : true,
    weather:{},
};

const WeatherSlice = createSlice({
    name:"Weather",
    initialState,
    reducers:{
        isLocation:(state)=>{
            state.setLocation = !state.setLocation ;
        }
    },
});




export default WeatherSlice.reducer;
export const {isLocation} = WeatherSlice.actions;