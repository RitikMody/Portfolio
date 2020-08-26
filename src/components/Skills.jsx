import React from "react";
import skills from "../skills";

function Skill(props){
    return <div className="skill">
        <h3>{props.name}</h3>
    </div>;
}

function Skills(){
    return <div className="skills">
        <h1>Skills</h1>
        {skills.map((item,index)=>{
            return <Skill key={index} name={item}/>;
        })}
    </div>
}

export default Skills;