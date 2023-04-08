import React from "react";
import $ from "jquery"
class Contact extends React.Component {
    componentDidMount(){
        $("#contact").mouseover(function() {
            $(".contact-head").addClass("ani");
          });
        
          $("#contact").mouseout(function() {
            $(".contact-head").removeClass("ani");
          });
    }
    render() {
        return (
            <section id="contact">

                <div className="row">
                    <div className="col-lg-2"></div>

                    <div className=" col-lg-8  ">
                        <p className="contact-head">
                            Contact Us
                        </p>
                        <p className="contact-details">
                            <a href="mailto:akash01714595969@gmail.com">Gmail: akash01714595969@gmail.com</a>
                            <br />
                            <a href="tel:+8801306091544">Mobile: 01306091544</a>
                            <br />
                            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <br />
                            <a href="http://instagram.com" className="contact-instagram" target="_blank"
                                rel="noopener noreferrer">Istagram</a>
                        </p>
                        <p className="feed-head">
                            Contact us directly
                        </p>
                        <input type="text" className="feed-input" placeholder="Name" />
                        <br />


                        <input type="email" className="feed-input" placeholder="Email" />
                        <br />


                        <p className="feed-txt">Description</p>

                        <textarea className="feed-input feed-input-lg" />
                        <br />

                        <input type="button" value="Send" className="feed-btn" />





                    </div>

                    <div className="col-lg-2">








                    </div>

                </div>
            </section>
        );
    }
}
export default Contact;