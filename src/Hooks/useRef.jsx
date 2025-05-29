/*  useRef is a React Hook that allows you to create a mutable reference to a value that persists across renders without causing the component to re-render when it changes.

It returns a ref object with a .current property.

You can use it to directly access and manipulate DOM elements.

Or to keep any mutable value that does not trigger re-render when updated  */



import React, { useEffect, useState,useRef } from 'react';

const UseRef = () => {
  const inputref=useRef();
    console.log("................");
    useEffect(() => {
    inputref.current.focus();
  }, []);
   const submit=()=>{   
    console.log(inputref.current.value)
   }
   
  return (
    <div>

        <input type="text" style={{border: '1px solid black' }} ref={inputref} />
        <button className="" onClick={submit}>Submit</button>
        {/* <input type="text" className="" style={{border:'solid black 1px'}} ref={inputref[1]}/>
        <button className="">Submit2</button> */}
        {/* <h1 style={{background:"black"}}>{inputref.current?.value}</h1> */}
    </div>
  )
}

export default UseRef;