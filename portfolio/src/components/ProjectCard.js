import React from "react";


export default function ProjectCard(props) {
    return <>
        <div className="image col-md-6 p-2 m-auto" style={{ width: '18rem;' }}>
            <img src={props.image} class="card-img-top" alt="..."></img>
            <div className="link">
                <a href={props.deployed}>
                    <ion-icon class="icon openIcon" name="open"></ion-icon>
                </a>

                <a href={props.github}>
                    <ion-icon class="icon gitIcon" name="logo-github"></ion-icon>
                </a>
            </div>
        </div>
    </>
};