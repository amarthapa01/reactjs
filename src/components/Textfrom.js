import React, {useState} from 'react'
import PropTypes from 'prop-types';
export default function Textbox(props) {
  let myStyle = {
    backgroundcolor : props.mode === "dark"?"black": "white" ,
    color : props.mode === "dark"?"white": "black",
    
  }
  const handleUpClick = ()=>{
    console.log("button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into upper case", "success");
    if (text === ""){
      props.showAlert("Please enter some text", "danger");
    }
  }
  const handleOnChange =(event)=>{ 
    console.log("text changed");
    setText(event.target.value)
  }
  const handleCopy =()=>{ 
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    if (text.value === ""){
      props.showAlert("Please enter some text", "danger");
    }else{
    props.showAlert("Text Copied", "success")}
  }

  const [text, setText] = useState(''); 
  return (
    <>
    <div className="container" >
<div className="mb-2" >
  <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'#FFFFC5',color: props.mode==='dark'?'white':'black' }} id="myBox" placeholder='Enter the Texts' rows="8"></textarea>
</div>
<button className="btn btn-primary" style={{backgroundColor: props.color}} onClick={handleUpClick} >Convert into uppercase</button>
<button className="btn btn-primary mx-3" style={{backgroundColor: props.color}} onClick={handleCopy}>copy Text</button>
    </div>
    <div className="container" style={myStyle}>
    <h2>Text number</h2>
    <p> {text.split(" ").filter((element)=>{return element.length !==0}).length}words and {text.length} characters</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
