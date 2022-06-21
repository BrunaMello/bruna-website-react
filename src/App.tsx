import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Header />
            <About />
            <Skill />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
