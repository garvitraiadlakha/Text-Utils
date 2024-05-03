import React,{useState} from 'react'

export default function TextForm(props) { 
  const [text,setText]=useState('Enter your text here');
  const handleOnChange=(event)=>{
    setText(event.target.value)
 };
 const handleOnClick = ()=> {
   let newtext =text.toUpperCase();
   setText(newtext);
   props.showAlert("Converted to uppercase !","success");

 };
 const handleLoCase=()=>{
   let newtext=text.toLowerCase();
   setText(newtext);
   props.showAlert("Converted to lowercase !","success");

 }
 const handleClear=()=>{
   let newtext='';
   setText(newtext);
   props.showAlert("Text Cleared !","success");

 }
 const handleCopy=()=>{
   var text=document.getElementById("exampleFormControlTextarea1");
   text.select();
   navigator.clipboard.writeText(text.value);
   document.getSelection().removeAllRanges();
   props.showAlert("Text Copied to clipboard!","success");


 }
 const handleExtraSpaces=()=>{
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText)
  
   props.showAlert("Extra space removed !","success");

 }
 const handlenum=()=>{
  const regex = /[0-9//]/g;
  const digits = text.match(regex);
  const res = digits.join('');
  navigator.clipboard.writeText(res);
 props.showAlert("Extracted num copied to clipboard !","success");


 }

  return (<>

  <div className="mb-3 container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
    <h3>
    <label forhtml="exampleFormControlTextarea1" className="form-label">{props.heading}</label></h3>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}rows="10"></textarea>
    <button disabled={text.length===0} type="button" onClick={handleOnClick} className="btn btn-primary my-3 mx-2">Convert to Uppercase</button>
    <button disabled={text.length===0} type="button" onClick={handleLoCase} className="btn btn-primary my-3 mx-2">Convert to Lowercase</button>
    <button disabled={text.length===0} type="button" onClick={handleCopy} className="btn btn-primary my-3 mx-2">Copy text</button>
    <button disabled={text.length===0} type="button" onClick={handleClear} className="btn btn-primary my-3 mx-2">Clear text</button>
    <button disabled={text.length===0} type="button" onClick={handleExtraSpaces} className="btn btn-primary my-3 mx-2">Remove extra spaces</button>
    <button disabled={text.length===0} type="button" onClick={handlenum} className="btn btn-primary my-3 mx-2">Extract numbers</button>
  
  </div>
  <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
  <h2>Text Summary:-</h2>
  <p className="my-0" > No. of char  :   {text.length}</p>
  <p className="my-0">No. of Words : {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}</p>
  <p className="my-0">No. of sentences : {text.split(/[.?!]\s/).filter((element)=>{return element.length!=0}).length}</p>
  <p className="my-0">{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
  </div>
  </>
  )
}
