import React from 'react';
import { Jumbotron } from "reactstrap";
// import Headshot from "./hangman.png";

export default function Home() {
    return (
        <div>
            <Jumbotron className="bg-transparent m-5 p-4 border rounded-0">
                <div className="row">
                    <h1 className="col-sm-12 text-left">Hello, my name is Daniel.</h1>
                </div>
                <hr></hr>

                <div className="row">
                    <div className="col-md-4">
                        {/* <img src={Headshot} alt="Daniel" /> */}
                    </div>
                    <div className="col-md-8 col-sm-12 text-justify">
                        <p>
                            I am a software engineer with experience in both back-end and front-end web development, I
                            primarily use JavaScript, HTML, and CSS.
                            <br></br>
                            In my previous career as a music teacher I developed a passion for teaching <i>and</i> learning,
                            which has helped tremendously as a web developer where I am constantly learning anteaching
                            myself new things.
                            <br></br>
                            As a creative hands-on person, I also like to spend my time gardening, jamming on my guitar,
                            playing with my daughters, and baking bread.
                        </p>
                        <p class="col-md-8 col-sm-12 text-justify">
                            <h6>
                                Email: thedanielenrico@gmail.com
                        </h6>
                            <h6>
                                Phone: (916)-719-8446
                        </h6>
                            <h6>
                                <a href="./assets/danielEnricoResume.pdf" download="danielEnricoResume">View Resume</a>
                            </h6>
                        </p>

                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}
