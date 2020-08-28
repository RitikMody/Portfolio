import React from "react";
import projects from "../projects";
import {Row,Col,Card} from "react-bootstrap";
import Chip from '@material-ui/core/Chip';

function Project(props){
    return <Col className="project" xs={1} md={4} lg={4}>
        <Card>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {props.software.map((item,index)=>{
            return <Chip 
            key={index}
            variant="outlined"
            color="secondary"
            label={item}/>;
        })}
        </Card.Body>
        </Card>
    </Col>;
}

function Projects(){
    return <div className="projects">
        <h1>Projects</h1>
        
        <Row>
        {projects.map((item,index)=>{
            return <Project key={index} title={item.title} description={item.description} software={item.software}/>
        })}
        </Row>
        </div>;
}

export default Projects;