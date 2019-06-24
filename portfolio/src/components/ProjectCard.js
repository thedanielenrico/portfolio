import React from "react";


export default function ProjectCard(props) {
    return <>
        <div className="image col-md-6 p-2 m-auto" style={{ width: '18rem;' }}>
            <img src={props.image} class="card-img-top" alt="..."></img>
            <div className="link">
                <ion-icon class="icon openIcon" name="open">
                    <a href={props.deployed} rel="noopener">

                    </a>
                </ion-icon>

                <ion-icon class="icon gitIcon" name="logo-github">
                    <a href={props.github} rel="noopener">

                    </a>
                </ion-icon>
            </div>
            <div className="title ">{props.name}</div>
            <p className="description">
                {props.description}
            </p>

        </div>
    </>
};