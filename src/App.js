import React, { useEffect, useState } from "react";
import './handylolo.css';

import NavBarItem from "./NavBarItem";
import { useLottie } from 'lottie-react';
import BgAnimation from './student-bg.json';
import AbstractBgAnime from './lottiefileData/AbstractBg/AbstractBgAnime';
import TechfoolloloHomePage from "./pages/TechfoolloloHomePage";


/// Here's the code that rotates the background gear ///////
/// while you are scrolling     /////////////
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("bgimage");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

/////////// end of background gear rotation ////////////




function App() {


    useEffect(() => {

    }, [])
    const options = {
        animationData:BgAnimation,
        loop:true,
        play:true
      }
      const {View} =useLottie(options);
    return (
        <div className="App">
            <div id="bgpng-container">
                <div id="the-lottiefile">{View}</div>
                <AbstractBgAnime />
            </div>
            <div id="handylolo-container">
                <div class="navBar">
                    <img id="loloLogo" src="./techfoollolo.png" />
                    <NavBarItem props={"DevOps Blog"} />
                    <NavBarItem props={"3DWorld"} />
                    <NavBarItem props={"Social Media"} />
                    <NavBarItem props={"Contact Me"} />
                </div>
                <canvas class="navBarSpace">
                </canvas>
                <TechfoolloloHomePage />

             </div>
        </div>
    );
}

export default App;
