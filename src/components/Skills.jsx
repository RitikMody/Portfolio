import React from "react";
import skills from "../skills";

function Skill(props){
    return <div className="skill">
        <h3>{props.name}</h3>
    </div>;
}

function Skills(){
    return <div className="skills">
        {skills.map((item)=>{
            return <Skill name={item}/>;
        })}
    </div>
}

export default Skills;