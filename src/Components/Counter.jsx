import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmt,reset } from '../Redux/counterSlice'

function Counter() {
  const [amt,setAmt]=useState(0)
  const dispatch=useDispatch()
  const {count}=useSelector(state=>state.counterReducer)
  const handleIncrementAmt=()=>{
    if(amt){
      dispatch(incrementByAmt(Number(amt)))
    }
    else{
      alert("Please enter the Amount!!!!")
    }
  }
  return (
    <div>
        <h1 className="text-center">Counter App</h1>
        <div className="border p-5 rounded mt-5" style={{width:"800px"}}>
        <h1 style={{fontSize: "100px"}} className='text-center'>{count}</h1>
        <div className="d-flex justify-content-around align-items-center mt-3 w-100 " >
            <button onClick={()=>dispatch(decrement())} className="btn btn-warning">DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-danger">RESET</button>
            <button onClick={()=>dispatch(increment())} className="btn btn-success">INCREMENT</button>
        </div>
        <div className="d-flex justify-content-between mt-5 w-100 align-items-center">
                <input onChange={(e)=>setAmt(e.target.value)} type="text" className="form-control" placeholder="Increment Amount"/>
                <button onClick={handleIncrementAmt} className="btn btn-primary ms-2">INCREMENT BY AMOUNT</button>
        </div>
    </div>

 </div>
    
  )
}

export default Counter

