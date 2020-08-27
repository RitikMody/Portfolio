import React from "react";
import Particles from 'react-particles-js';

function Introduction()
{
    return (<div className="intro">
    <Particles/>
    <div className="intro-contents">
    <img src={require("../images/Profile.jpg")} alt="Ritik Mody"></img>
    <div className="intro-text">
    <h1>Hi, I am Ritik Mody </h1>
    <p>Full Stack Web Developer and a Machine Learning Enthusiast.</p>
    </div>
    </div>
    </div>);
}

export default Introduction;