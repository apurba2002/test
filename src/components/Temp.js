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
                            <img alt="image" src="Screenshot (16).png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple Default</h3>

                            
                        </div>
                        <div className="box" id="orange">
                            <img alt="image" src="Screenshot (17).png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple Orange</h3>

                           
                        </div>
                        <div className="box" id="green" style={{ marginRight: "0" }}>
                            <img alt="image" src="Screenshot (18).png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt" >Simple Green </h3>

                            
                        </div>

                    </div>
                </div>
                <br></br>
                <div id="row2">
                    <div className="contain">
                        <div className="box" id="burlywood">
                            <img alt="image" src="Screenshot (19).png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple Burlywood</h3>

                           
                        </div>
                        <div className="box" id="lightblue">
                            <img alt="image" src="Screenshot (20).png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple LightBlue</h3>

                           
                        </div>
                        <div className="box" id="pink" style={{ marginRight: "0" }}>
                            <img alt="image" src="Screenshot (22).png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt" >Simple Pink </h3>

                            
                        </div>

                    </div>
                </div>
                <br></br>
                <div id="row3">
                    <div className="contain">
                        <div className="box" id="default-c2">
                            <img alt="image" src="c2.png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Mid Image Default</h3>

                            
                        </div>
                        <div className="box" id="pink-c2">
                            <img alt="image" src="pink2.png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt"> Mid Image Pink</h3>

                        </div>
                        <div className="box" id="green-c2" style={{ marginRight: "0" }}>
                            <img alt="image" src="green-2.png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt" >Mid Image Green </h3>

                            
                        </div>

                    </div>
                </div>
                <br></br>
                <div id="row4">
                    <div className="contain">
                        <div className="box" id="orange-c2" >
                            <img alt="image" src="orange-c2.png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Mid Image Orange</h3>

                            
                        </div>
                        <div className="box" id="burlywood-c2">
                            <img alt="image" src="b-c2.png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Mid Image Brown</h3>

                        </div>
                        <div className="box" id="lightblue-c2" style={{ marginRight: "0" }}>
                            <img alt="image" src="lb-c2.png" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt" >Mid Image LightBlue </h3>

                            
                        </div>

                    </div>
                </div>

            </section >
        )
    }
}
export default Temp