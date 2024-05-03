import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null );
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }  
  const toggleMode=()=>{
      if(mode==="dark"){
        setMode("light");
        document.body.style.backgroundColor="white";
        showAlert("Light mode Enabled ","success");
    }
      else {
        setMode("dark");
       document.body.style.backgroundColor="#042743";
       showAlert("Dark mode Enabled ","success");

    }
  }
  return (
    <>   
     <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <TextForm heading="ENTER THE TEXT TO ANALYSE BELOW :" mode={mode} showAlert={showAlert}/>
    
    </>
  );
}

export default App;
