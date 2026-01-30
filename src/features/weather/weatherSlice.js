import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    setLocation : true,
    loading : false,
    weather:{},
    reject:true,
};

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const GetWeather = createAsyncThunk("Weather/GetWeather",async(Cityname)=>{
    const response = await axios.get(`${baseUrl}`,{params:{
        q:Cityname,
        appid:process.env.REACT_APP_WEATHER_API_KEY,
        units:"metric"
    }});
    return response;
});

const WeatherSlice = createSlice({
    name:"Weather",
    initialState,
    reducers:{
        isLocation:(state)=>{
            state.setLocation = !state.setLocation ;
        },
        alertDissmiss:(state)=>{
            state.reject = !state.reject;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(GetWeather.pending,(state)=>{
            state.loading = true;
            state.setLocation = true;
            state.reject = false;
        });
        builder.addCase(GetWeather.fulfilled,(state,action)=>{
            state.loading = false;
            state.weather = action.payload;
            state.setLocation = false;
            state.reject = false;
            console.log(state.weather);
        });
        builder.addCase(GetWeather.rejected,(state)=>{
            state.setLocation = true;
            state.reject = true;
        })
    }
});




export default WeatherSlice.reducer;
export {GetWeather};
export const {isLocation,alertDissmiss} = WeatherSlice.actions;