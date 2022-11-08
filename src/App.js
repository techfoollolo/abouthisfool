import './Academy.css';
import SystemNavBar from './NavBar/SystemNavBar';
import Router from './Router';
import Form1 from './Forms/Form1';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
function App() {

useEffect(()=>{
  const script = document.createElement("script");

  script.src = "anime.min.js";
  script.async = true;

  document.body.appendChild(script);
})

  return (
    <>

        <BrowserRouter>

        <SystemNavBar />
        <Router />
        </BrowserRouter>

    </>
  );
}

export default App;
