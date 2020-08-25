import React from "react";

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

export default Project;