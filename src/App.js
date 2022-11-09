import React, { useEffect, useState } from "react";
import './handylolo.css';
import { BrowserRouter } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import Router from './Router.js';



function App() {


    useEffect(() => {

    }, [])

    return (
        <BrowserRouter>
        <div className="App">

                <div className="navBar">
                    <img id="loloLogo" src="./techfoollolo.png" />
                    <NavBarItem props={"DevOps Blog"} link={"\/abouthisfool"} />
                    <NavBarItem props={"3DWorld"} link={"/abouthisfool/3dworld"}/>
                    <NavBarItem props={"Social Media"} link={"\/"}/>
                    <NavBarItem props={"Contact Me"} link={"\/"}/>
                </div>
                <canvas className="navBarSpace">
                </canvas>
                <Router />

             </div>
        </BrowserRouter>
    );
}

export default App;
