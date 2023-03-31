import React from "react";
import $ from "jquery"
import About from "./About";
class Baner extends React.Component {
    componentDidMount() {
        $("#baner").fadeIn(2000)
        $("#baner-left").slideDown(3000);
       
    }

    render() {
        return (
            <>
            <section id="baner" style={{ display: "none" }} >
                <div className="row" id="baner-left" style={{ display: "none" }} >
                    <div className="col-lg-6 col-12">
                        <p className="baner-txt" id="baner-txt">
                            Welcome to cover creator
                        </p>
                        <a href="#tool"><input type="button" id="baner-btn" className="baner-btn" value="Start Now"  /></a>
                    </div>
                    <div className="col-lg-6">

                    </div>

                </div>
            </section>
            
            </>

        )
    }








}

export default Baner;