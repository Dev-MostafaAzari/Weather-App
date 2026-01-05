import {configureStore} from "@reduxjs/toolkit";
import weatherSlice from "../features/weather/weatherSlice";
import loadingSlice from "../features/loading/loadingSlice";

const store = configureStore({
    reducer:{
       weather: weatherSlice,
       loading : loadingSlice,
    }
});

export default store;