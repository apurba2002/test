import { Component } from "react";
import React from "react";
import $ from "jquery";
import Baner from "./Baner";
import About from "./About";

class Footer extends React.Component {
    componentDidMount(){
    
    }
    render() {
        return (
            <>
               <section id="footer">
        <div className="row">
            <div className="col-lg-6 footer-left">
                <div className="footer-element-left">
                    <p className="link-head">
                        Important links
                    </p>
                    <a href="#head" id="foot-home-btn" >Home</a>
                    <br/>
                    <a href="#about">About our self</a>
                    <br/>
                    <a href="#tool">Tool</a>
                    <br/>
                    <a href="#head">Our works</a>
                    <br/>
                    <a href="#credit">Credit</a>
                    <br/>
                    <a href="#contact">Contact us</a>
                    <br/>
                    <a href="#head">Profile</a>
                    <br/>
                    <a href="#privacy">Privacy policy</a>
                </div>
            </div>
            <div className="col-lg-6 footer-right">
                <div className=" footer-element-right">
                    <p className="contact-head">
                        Contact Us
                    </p>
                    <p className="contact-details">
                        <a href="mailto:akash01714595969@gmail.com">Gmail: akash01714595969@gmail.com</a>
                        <br/>
                        <a href="tel:+8801306091544">Mobile: 01306091544</a>
                        <br/>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <br/>
                        <a href="http://instagram.com" className="contact-instagram" target="_blank"
                            rel="noopener noreferrer">Istagram</a>
                    </p>





                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-12">
                <div style={{backgroundColor: "cornflowerblue", height: "100px"}}>
                    <p style={{textAlign: "center", color: "white"}}>
                        All credit reserved by ©apurba debnath
                    </p>
                </div>

            </div>

        </div>
    </section>

            </>
        )
    }
}
export default Footer;