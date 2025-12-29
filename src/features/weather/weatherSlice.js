import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setLocation : false,
    loading : false,
    weather:{},
};

const WeatherSlice = createSlice({
    name:"Weather",
    initialState,
    reducers:{},
});




export default WeatherSlice.reducer;