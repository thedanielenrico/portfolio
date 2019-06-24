import React from "react";


export default function ProjectCard(props) {
    return <>
        <div className="image col-md-6 p-2 m-auto" style={{ width: '18rem;' }}>
            <img src={props.image} class="card-img-top" alt="..."></img>
            <div className="link">
                <a href={props.deployed} rel="noopener">
                    <ion-icon class="openIcon" name="open">

                    </ion-icon>
                </a>

                <a href={props.github} rel="noopener">
                    <ion-icon class="gitIcon" name="logo-github">

                    </ion-icon>
                </a>
            </div>
            <div className="title ">{props.name}</div>
            <p className="description">
                {props.description}
            </p>

        </div>
    </>
};