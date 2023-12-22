import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState ={
    url:{},
    genres:{}
}

export const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{  //isme propertirs and functions  
      getApiConfiguration :(state,action)=>{
           state.url =action.payload;
      },
      getGenres:(state,action)=>{
          state.genres=action.payload;
      }
    }
})

export const {getApiConfiguration,getGenres}=homeSlice.actions;
export default homeSlice.reducer  //export all the reducers