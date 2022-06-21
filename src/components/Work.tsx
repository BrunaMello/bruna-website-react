import React from "react";

function Work() {
    return (
        <section id="work-section">
            <div>
                <div className="container-fluid">
                    <br></br>
                    <h2 className="text-uppercase text-center about">Portfolio</h2>
                    <hr className="star-dark mb-5"></hr>
                    <br></br>
                </div>
                <div className="container">
                    <div className="cards">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="framework-card">
                                <img src="/img/react-work.png"/>
                                <p>React</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="framework-card">
                                <img src="/img/python-work.png"/>
                                <p>Python</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="framework-card">
                            <img src="/img/android-work.png"/>
                            <p>Android</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="framework-card">
                            <img src="/img/apple-work.png"/>
                            <p>Apple</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="framework-card">
                            <img src="/img/java-work.png"/>
                            <p>Java</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="framework-card">
                            <img src="/img/others-work.png"/>
                            <p>Others</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <br></br>
            </div>
        </section>
    )
}

export default Work;