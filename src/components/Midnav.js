
import React from "react";
class MidNav extends React.Component {
    render() {

        return (
            <>
                <section id="midnav">
                    <div className="contain">
                        <div className="box" onClick={() => { window.location.href = "#contact" }}>
                            <img alt="image" src="contactimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Contact Us</h3>

                            <p className="boxtxt">
                                Our team is available 24 hours for you . So don't hesitate to Contact us any time.
                            </p>
                        </div>
                        <div className="box" onClick={() => { window.location.href = "#privacy" }}>
                            <img alt="image" src="privacyimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Our Privacy</h3>

                            <p className="boxtxt">
                                We are always working hard to secure your information.
                            </p>
                        </div>
                        <div className="box" onClick={() => { window.location.href = "#templete" }}  style={{ marginRight: "0" }}>
                            <img alt="image" src="temimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt" >Templetes </h3>

                            <p className="boxtxt">
                                Our designers know your expectation. Just choose and save your time.
                            </p>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
export default MidNav;