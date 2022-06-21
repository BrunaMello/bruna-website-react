import React from "react";

function Footer() {
    return (
        <footer id="footer">
            <div className="container-fluid text-center">
                <br></br>
                <p><small>Bruna Mello - {year}</small></p>
                <br/>
            </div>
        </footer>
    )
}

const year = new Date().getFullYear()
export default Footer;