import React from "react";
import "./intro.css";
import bg from "../../assets/file.png"
import btnImg from "../../assets/down.png"
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Avinash</span> <br />Full Stack Developer </span>
                <p className="introPara">I am a Skilled web designed with experience in creating<br></br> visually appealing and user friendly website.</p>
                <Link><button className="btn"><img src="" className="btnImg" />Cv</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;