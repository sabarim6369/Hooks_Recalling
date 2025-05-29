// import { useReducer, useState } from 'react'
// import './App.css'
// import Dummy from "./dummy"
// import Agestore from './Store/store'
// const agereducer=(state,action)=>{
//   switch(action.type){
//     case "Increment":
//       return state+1;
//     case "Decrement":
//       if(state==0){
//         return state;
//       }
//       return state-1;  
//     default:
//       return state;  
//   }

// }
// function App() {
//   // const {increase}=Agestore();
//   // const[age,setage]=useState(0);
//   const[age,dispatch]=useReducer(agereducer,0);
//   return (
//      <>
//     <button className='bg-red-500 cursor-pointer' onClick={()=>dispatch({type:"Increment"})}>
//       Add+
//     </button>
//     <button className='bg-red-500 cursor-pointer flex' onClick={()=>dispatch({type:"Decrement"})}>
//       Reduce+
//     </button>
//     <div className="">Age</div>
//     <h1 className="">{age}</h1>
//     <div className="">Count</div>
//     <h1 className="">{age}</h1>
    
//     </>
//   )
// }

// export default App


import './App.css'
import UseReducer from './Hooks/useReducer'
import UseMemo from './Hooks/useMemo'
import UseLayoutEffect from './Hooks/useLayoutEffect'
import UseRef from './Hooks/useRef'
function App() {
  
  return (
   <>
   {/* <UseReducer/> */}
   {/* <UseMemo/> */}
   {/* <UseLayoutEffect/> */}
   <UseRef/>
   </>
  )
}

export default App
