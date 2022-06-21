import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="nav" id="navbar">
                <div className="logo">
                    <a href="#logo-section" id="logo">
                        <h1>Bruna Mello</h1>
                    </a>
                </div>
                <ul className="nav_list" id="navlinkitems">
                    <li className="nav_item">
                        <a href="#home-section" className="nav_link" id="home">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="#about-section" className="nav_link" id="home">About</a>
                    </li>
                    <li className="nav_item">
                        <a href="#skill-section" className="nav_link" id="home">Skills</a>
                    </li>
                    <li className="nav_item">
                        <a href="#work-section" className="nav_link" id="home">Work</a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact-section" className="nav_link" id="home">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )}

export default Navbar;