import React from "react";
import projects from "../projects";

function Project(props){
    return <div className="project">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <ul>
        {props.software.map((item)=>{
            return <li>{item}</li>;
        })}
        </ul>
    </div>;
}

function Projects(){
    return <div className="projects">
        {projects.map((item,index)=>{
        return <Project key={index} title={item.title} description={item.description} software={item.software}/>
    })}
    </div>;
}

export default Projects;