
import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [mode , setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const [color, setColor] = useState("dark");

  const changeColor=(newColor)=>{
    if(color === "dark"){
      setColor('green');
      document.body.style.backgroundColor = "#76B947";
     
    }
    else if(color === "green"){
      setColor('purple');
      document.body.style.backgroundColor = "#695E93";
     
      }
      else if(color === "purple"){
        setColor('orange');
        document.body.style.backgroundColor = "#FF5412";
   
        }
        else if(color === "orange"){
          setColor('blue');
          document.body.style.backgroundColor = "#2E8BC0";
          }
          else if(color === "blue"){
            setColor('dark');
            document.body.style.backgroundColor = "white";
            }
 
  }
  const showAlert=(message, type)=>{
    setAlert({
      mssg: message,
      type: type
    }
    )
    setTimeout(()=>{
      setAlert(null)
    },3000);
  
}

  const Toggle =()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "	#36454F";
      showAlert("Uou are in dark mode", "success");
    }
    else {
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Uou are in light mode", "success")
    }
  }


  return (
    <>
    <Router>
  <Navbar title="texttutles" mode = {mode}  Toggle={Toggle} color={color} changeColor={changeColor} />
  <Alert alert = {alert}/>
  <div className="container">
  <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Textfrom showAlert = {showAlert} heading="Enter your text here" mode = {mode} color={color} changeColor={changeColor}/>}/>
        <Route path="/about" element={<About mode = {mode}/>} />
      </Routes>
      
  </div>
  {/* <About/> */}
  </Router>
  </>
  );
}

export default App;
