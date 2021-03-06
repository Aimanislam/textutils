
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabledor not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({      //Alert is a object
     msg: message,
     type: type
    })

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');       //function calling
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success");  //showAlert function is take msg & type
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
   <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert= {alert}/>
   <div className="container my-3">
   <TextForm heading="Enter the text to analyze below" mode={mode} />
   <About/>
   </div>
   </>
  );
}

export default App;
