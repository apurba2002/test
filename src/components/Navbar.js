


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
                <section id="head" >
                    <div className="head">
                        <nav className="navbar fixed-top  navbar-dark navbar-expand-lg bg-primary">
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
                                            <a className=" btn btn-primary " href="#"  id="home"  >Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" btn btn-primary " href="#contact"  >Contract</a>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <a className=" btn btn-primary" href="#templete" >Templetes</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className=" btn btn-primary" href="#about" >About Us</a>
                                        </li>

                                        
                                        <li className="nav-item">
                                            <a className=" btn btn-primary" href="#privacy" >Privacy policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" btn btn-primary" href="#team" >Our Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-primary" href="https://apurba2002.github.io/resume/" target="blank">Try our new Resume.com</a>
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
