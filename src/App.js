import React, { useEffect, useState } from "react";
import './handylolo.css';
import CardText from "./CardText";
import NavBarItem from "./NavBarItem";
import { useLottie } from 'lottie-react';
import BgAnimation from './student-bg.json';


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
                <div id="bgpng"><img id="bgimage" src="./Vector.png"/></div>
                <div id="the-lottiefile">{View}</div>
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
                <div className="techfoollolo-content">
                <CardText header={"Hello. This is Techfoollolo."} content={"I enjoy studying DevOps. I love to build things, but I love to manage and enhance things even more. I also love to share."}/>
                <CardText header={"Work with me"} content={"If you wanna work with me, I'm always open mind for interesting projects. :)"}/>

                </div>

             </div>
        </div>
    );
}

export default App;
