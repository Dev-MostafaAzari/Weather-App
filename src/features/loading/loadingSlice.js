import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loadingVariants:{
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                staggerChildren:0.1,
                duration:1,
                repeat:Infinity,
                repeatType:"mirror",
            },
        },
    },
};


const LoadingSlice = createSlice({
    name:"loadingSlice",
    initialState,
    reducers:{},
});


export default LoadingSlice.reducer;