import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment : (state)=>{
         state.count++
        },
        decrement : (state)=>{
            state.count--
        },
        //it's not working all case state.count=0
        //so we use here return , return all initial states using spread operator,then change the count:0
        reset : (state)=>{
           return {...state,count:0}
        },
        //action is predefined
        incrementByAmt : (state,action)=>{
            state.count+=action.payload  //we get the the value which got by dispatched the action from payload
        }
    }
})
export const {increment,decrement,reset,incrementByAmt}=counterSlice.actions
export default counterSlice.reducer //output of actions