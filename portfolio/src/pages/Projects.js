import React from 'react';
import { Jumbotron } from "reactstrap";
import ProjectsObj from "../api/projects";
import ProjectCard from "../components/ProjectCard";

// class Welcome extends React.Component
export default class Projects extends React.Component {
    render() {

        return (

            <div>
                <Jumbotron className="bg-transparent m-5 p-4 border rounded-0">
                    <div className="row">
                        <h1 className="col-sm-12 text-left">Projects</h1>
                    </div>
                    <hr></hr>
                    <div className="row">
                        {ProjectsObj.map(el => <ProjectCard image={el.image} deployed={el.deployed} github={el.github}></ProjectCard>)}
                        

                    </div>
                </Jumbotron>
            </div>
        );
    }
}
