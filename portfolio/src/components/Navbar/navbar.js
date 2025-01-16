import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktop-menu">
                <Link to="About" className="desktopMenuListItem" smooth={true} duration={500}>About</Link>
                <Link to="Skills" className="desktopMenuListItem" smooth={true} duration={500}>Skills</Link>
                <Link to="Project" className="desktopMenuListItem" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" className="desktopMenuListItem" smooth={true} duration={500}>Contact</Link>
            </div>
            <button className="desktopMenubtn">
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me
            </button>
        </nav>
    );
}

export default Navbar;