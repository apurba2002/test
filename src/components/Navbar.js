


import React from "react";
import $ from "jquery"
import About from "./About";
import Baner from "./Baner";
import { Router } from "react-router";

class Navbar extends React.Component {
    componentDidMount() {
     
    }

    render() {
        return (
            <>
                <section id="head">
                    <div className="head">
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Cover page creator</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home" aria-current="page" >Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact"  >Contract</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tool">Tools</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" >Templetes</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="#about" >About Us</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="#credit" > Credit</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#privacy" >Privacy policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Your profile</a>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
               
            </>

        )
    }








}

export default Navbar;
