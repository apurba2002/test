import React from "react";
import $ from "jquery"
class Temp extends React.Component {
    componentDidMount() {

        $("#default").click(() => {
            var theme = "default"
            sessionStorage.setItem("theme", theme)
            var loc = "cover.html"

            sessionStorage.setItem("loc", loc)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#orange").click(() => {
            var theme = "orange"
            sessionStorage.setItem("theme", theme)
            var loc = "cover.html"

            sessionStorage.setItem("loc", loc)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#green").click(() => {
            var theme = "green"
            sessionStorage.setItem("theme", theme)
            var loc = "cover.html"

            sessionStorage.setItem("loc", loc)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#pink").click(() => {
            var theme = "pink"
            sessionStorage.setItem("theme", theme)
            var loc = "cover.html"

            sessionStorage.setItem("loc", loc)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#lightblue").click(() => {
            var theme = "lightblue"
            sessionStorage.setItem("theme", theme)
            var loc = "cover.html"

            sessionStorage.setItem("loc", loc)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#burlywood").click(() => {
            var theme = "burlywood"
            sessionStorage.setItem("theme", theme)
            var loc = "cover.html"

            sessionStorage.setItem("loc", loc)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#default-c2").click(() => {
            var theme = "default"
            var loc = "cover2.html"

            sessionStorage.setItem("loc", loc)
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#pink-c2").click(() => {
            var theme = "pink"
            var loc = "cover2.html"

            sessionStorage.setItem("loc", loc)
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#green-c2").click(() => {
            var theme = "green"
            var loc = "cover2.html"

            sessionStorage.setItem("loc", loc)
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#orange-c2").click(() => {
            var theme = "orange"
            var loc = "cover2.html"

            sessionStorage.setItem("loc", loc)
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#burlywood-c2").click(() => {
            var theme = "brown"
            var loc = "cover2.html"

            sessionStorage.setItem("loc", loc)
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })
        $("#lightblue-c2").click(() => {
            var theme = "lightblue"
            var loc = "cover2.html"

            sessionStorage.setItem("loc", loc)
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
            window.location.href = "#tool"
        })



    }
    render() {

        return (
            <section id="templete">
                <h1>Select Your Templete And Create Your Cover</h1>

                <div id="row1">
                    <div className="contain">
                        <div className="box" id="default" >
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
                        <div className="box" onClick={() => { window.location.href = "#templete" }} style={{ marginRight: "0" }}>
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
                </div>
                <br></br>
                <div id="row2">
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
                        <div className="box" onClick={() => { window.location.href = "#templete" }} style={{ marginRight: "0" }}>
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
                </div>
                <br></br>
                <div id="row3">
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
                        <div className="box" onClick={() => { window.location.href = "#templete" }} style={{ marginRight: "0" }}>
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
                </div>
                <br></br>
                <div id="row4">
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
                        <div className="box" onClick={() => { window.location.href = "#templete" }} style={{ marginRight: "0" }}>
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
                </div>

            </section >
        )
    }
}
export default Temp