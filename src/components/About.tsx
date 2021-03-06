import React from "react";

function About() {
    return (
        <div>
            <section id="about-section">
                <div className="container-fluid text-center">
                    <br></br>
                    <h2 className="text-uppercase text-center about">About</h2>
                    <hr className="star-dark mb-5"></hr>
                        <div className="row">
                            <div className="col ml-auto">
                                <h3 className="mb-0 no-hover">Bachelor in Computer Science and Postgraduate in Database</h3>
                                <br/>
                                <p className="lead" id="textintro">Bachelor of Computer Science with
                                    Database specialization. I am looking for an opportunity to gain experience with
                                    Java, Python and SQL development.
                                    I always try to work as a team, cooperating with everyone and helping in the best way possible, with great satisfaction in teaching and learning.</p>
                                <br></br>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default About;