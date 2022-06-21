import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <section id="header">
            <div>
                <header id="header" className="masterhead text-white text-center">
                        <div className="smalllogo">
                            <a href="#welcome-section" className="logolink">
                                <h2>Bruna Mello</h2>
                            </a>
                        </div>
                        <button className="nav-toggle">
                            <span className="hamburger"></span>
                        </button>
                    <Navbar />
                    <div className="container-fluid div-header">
                        <img className="img-fluid d-block mx-auto mb-5" id="profile-img" src="/img/profile-min.png"/>
                        <h1 className="no-hover">Bruna Mello</h1>
                        <hr className="star-light"></hr>
                        <h2 className="mb-0 no-hover">Junior Developer</h2>
                        <img src="/img/icons/java-white.png" className="icons-img"/>
                        <img src="/img/icons/js-white.png" className="icons-img"/>
                        <img src="/img/icons/python-white.png" className="icons-img"/>
                        <img src="/img/icons/sql-white.png" className="icons-img"/>
                        <img src="/img/icons/react-white.png" className="icons-img"/>
                        <br/>
                    </div>
                </header>
            </div>
        </section>

    )
}

export default Header;