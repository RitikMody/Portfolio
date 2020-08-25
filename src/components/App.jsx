import React, { useState } from "react";
import Introduction from "./Introduction";
import Project from "./Project";
import Footer from "./Footer";
import projects from "../projects";

function App()
{
    return (<div>

    <Introduction/>

    {projects.map((item,index)=>{
        return <Project key={index} title={item.title} description={item.description} software={item.software}/>
    })}
    
    <Footer/>

    </div>);
}

export default App;