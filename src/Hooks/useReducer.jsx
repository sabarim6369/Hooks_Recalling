
import { useReducer, useState } from 'react'

const reducer=(state,action)=>{
  switch(action.type){
    case "Increment_age":
      return {...state,age:state.age+1};
    case "Decrement_age":
   
      return {...state,age:Math.max(0,state.age-1)};  
    case "Increment_count":
      return {...state,count:state.count+1}
    case "Decrement_count":
      return {...state,count:Math.max(0,state.count-1)}  
    case "setusername":
      return {...state,name:action.payload}  
      default:
      return state;  
  }

}
function UseReducer() {
  // const {increase}=Agestore();
  // const[age,setage]=useState(0);
  const[state,dispatch]=useReducer(reducer,{age:0,count:0,name:''});
  return (
     <>
    <button className='bg-red-500 cursor-pointer' onClick={()=>dispatch({type:"Increment_age"})}>
      Add Age+
    </button>
    <button className='bg-red-500 cursor-pointer flex' onClick={()=>dispatch({type:"Decrement_age"})}>
      Reduce Age+
    </button>
    <button className='bg-red-500 cursor-pointer flex' onClick={()=>dispatch({type:"Increment_count"})}>
      Add count+
    </button>
    <button className='bg-red-500 cursor-pointer flex' onClick={()=>dispatch({type:"Decrement_count"})}>
      Reduce count+
    </button>
    <input type="text" className='border' onChange={(e)=>dispatch({type:"setusername",payload:e.target.value})}></input>
    <div className="">Age</div>
    <h1 className="">{state.age}</h1>
    <div className="">Count</div>
    <h1 className="">{state.count}</h1>
    <h1 className="">{state.name}</h1>
    </>
  )
}

export default UseReducer
