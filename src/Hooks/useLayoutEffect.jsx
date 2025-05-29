//Useeffect us asynchronous whereas useLayoutEffect is syncronous.That is useeffect doestnot block other components rendering at first.it run asynchronously whereas this useLayoutEffect is syncronous after copleting this only remaining renders
import { useEffect,useLayoutEffect } from "react"
const UseLayoutEffect=()=>{
    let i=0;
  for(i=0;i<100000000000;i++){}
  if(i==100000000000){
    console.log("......................")
  }
    return(
        <></>
    )
}
export default UseLayoutEffect;