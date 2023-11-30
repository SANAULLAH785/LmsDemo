import { createSlice } from "@reduxjs/toolkit";


const questionSlice=createSlice({
 name:'questions',
 initialState:{
   selectedquestiontype:"True/False"
 },
 reducers:{
    OpenMcqs ( state,action){
     state.selectedquestiontype= action.payload;
    },
 },



});
 export default questionSlice.reducer;
 export const {OpenMcqs}=questionSlice.actions;
