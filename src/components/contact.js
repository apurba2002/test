import React from "react";
class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
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
                <div className="row">
            <div className=" col-lg-6">
            <p className="feed-head">
                    Contact us directly
                </p>
                <input type="text" className="feed-input" placeholder="Name"/>
                <br/>


                <input type="email" className="feed-input" placeholder="Email"/>
                <br/>


                <p className="feed-txt">Description</p>

                <textarea className="feed-input feed-input-lg" />
                <br/>

                <input type="button" value="Send" className="feed-btn"/>





            </div>

            <div className="col-lg-6">



            




            </div>

        </div>
            </section>
        );
    }
}
export default Contact;