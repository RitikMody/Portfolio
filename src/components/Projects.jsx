import React from "react";
import projects from "../projects";
import Chip from '@material-ui/core/Chip';

function Project(props){
    return <div className="project col-lg-4">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.software.map((item,index)=>{
            return <Chip 
            key={index}
            variant="outlined"
            color="secondary"
            label={item}/>;
        })}
    </div>;
}

function Projects(){
    return <div className="projects">
        <h1>Projects</h1>
        <div className="row">
        {projects.map((item,index)=>{
            return <Project key={index} title={item.title} description={item.description} software={item.software}/>
        })}
        </div>
        </div>;
}

export default Projects;