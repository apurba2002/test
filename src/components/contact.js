import React from "react";
import $ from "jquery"
class Contact extends React.Component {
   
    render() {
        const PostData = async (e) => {
            e.preventDefault()

            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let message = document.querySelector("#des").value;


            const res = await fetch("https://cover-37e3a-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,


                    })
                })
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#des").value = "";
            alert("Thanks For Your FeedBack")
        }
        return (
            <section id="contact">
                <form onSubmit={PostData}>

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
                            <input type="text" id="name" required className="feed-input" placeholder="Name" />
                            <br />


                            <input type="email" id="email" required className="feed-input" placeholder="Email" />
                            <br />


                            <p className="feed-txt">Description</p>

                            <textarea required id="des" className="feed-input feed-input-lg" />
                            <br />

                            <input type="submit" value="Send" className="feed-btn" />





                        </div>

                        <div className="col-lg-2">








                        </div>

                    </div>
                </form>
            </section>
        );
    }
}
export default Contact;