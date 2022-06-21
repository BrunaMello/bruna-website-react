import React from "react";

function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="container-fluid text-center text-white">
                    <br></br>
                    <h2 className="text-center text-white text-uppercase contact">Contacts</h2>
                    <div className="row">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-auto">
                                    <img src="/img/linkedin-contact.png" className="icons-img"/>
                                    <br></br>
                                    <a className="contact-info" href="https://www.linkedin.com/in/brunacrespomello/">LinkedIn</a>
                                    </div>
                                    <div className="col-md-auto">
                                        <img src="/img/cv-contact.png" className="icons-img"/>
                                        <br></br>
                                        <a className="contact-info" href="docs/Curriculo%20Bruna.pdf">CV</a>
                                    </div>
                                <div className="col-md-auto">
                                        <img src="/img/git-contact.png" className="icons-img"/>
                                        <br></br>
                                    <a className="contact-info" href="https://github.com/BrunaMello">GitHub</a><br></br>
                                    </div>
                            </div>
                        </div>

                        <p className="text-center text-white" id="textcontact">
                            <br></br>
                            <a className="contact-info" href="mailto:brunacrespomello@gmail.com?subject=Contato: Site">brunacrespomello@gmail.com</a>
                            <br></br>
                            <p>(+353) 830 886 348</p>
                        </p>
                    </div>


                </div>
            </section>

        </div>
    )
}

export default Contact;