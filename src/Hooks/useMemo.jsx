// import React, { useState } from "react";

// function Usememo() {
//   const [number, setNumber] = useState("");
//   const [theme, setTheme] = useState("light");

//   const slowfunction = (num) => {
//     console.log("Calling slow function...");
//     for (let i = 0; i < 1000000000; i++) {} 
//     return num * 2;
//   };

//   const doublenumber = slowfunction(number);

//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   const containerStyle = {
//     backgroundColor: theme === "light" ? "#ffffff" : "#333333",
//     color: theme === "light" ? "#000000" : "#ffffff",
//     minHeight: "100vh",
//     padding: "20px",
//     transition: "all 0.3s ease",
//   };

//   // Color for double number based on theme
//   const numberColor = theme === "light" ? "blue" : "orange";

//   return (
//     <div style={containerStyle}>
//       <h2>Normal State Demo</h2>

//       <input
//         type="number"
//         placeholder="Enter a number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//       />

//       <p style={{ fontSize: "24px", marginTop: "10px", color: numberColor }}>
//         Double: {doublenumber}
//       </p>

//       <button onClick={toggleTheme}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// export default Usememo;


import React, { useState, useMemo } from "react";

function Usememo() {
  const [number, setNumber] = useState("");
  const [theme, setTheme] = useState("light");

  const slowfunction = (num) => {
    console.log("Calling slow function...");
    for (let i = 0; i < 1000000000; i++) {} 
    return num * 2;
  };

  const doublenumber = useMemo(() => {
    return slowfunction(number);
  }, [number]); 
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const containerStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h2>useMemo Demo</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p style={{ fontSize: "24px", color: theme === "light" ? "blue" : "orange" }}>
        Double: {doublenumber}
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Usememo;
