import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = (color)=> {
    if(color === 'light'){
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#212529"
      document.querySelector('nav').style.color = 'black';
      // showAlert("Light theme", "primary")
    }
    else if(color === "warning"){
      setMode(color)  
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#212529"
      document.querySelector('nav').style.color = 'black';
      // showAlert("Yellow theme", "warning")
    }
    else if(color === "success"){
      setMode(color);
      document.body.style.backgroundColor = "white"
      document.querySelector('nav').style.color = 'white'; 
      // showAlert("Green theme", "success")  
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = "#18417d"
      document.body.style.color = "white"
      document.querySelector('nav').style.color = 'white';
      // showAlert("Dark theme", "dark")  
    }
  }
  console.log(mode)

  return (
   <>
   <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text below" showAlert={showAlert}  mode={mode}/>}/>
            <Route index element={<TextForm heading="Enter the text below" showAlert={showAlert}  mode={mode} />} />     
            <Route path="/about" element={<About />} />
        </Routes>
    </div>
   </BrowserRouter>
   </>
  );
}

export default App;
