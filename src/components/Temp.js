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
                <div className="row">
                    <div className="col-lg-2 col-md-1 ">

                    </div>
                    <div className="col-lg-8 col-md-8 col-12 ">
                        <h1 className="tem-head">
                            Take your style and create something awasome
                        </h1>
                    </div>
                    <div className="col-lg-2 "></div>


                    {/* row 1 */}
                    <div className="col-lg-2 col-md-1 "></div>

                    <div className="col-lg-2 col-md-2">
                        <img id="default" src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-light  bg-primary text-center p-3 " >Simple default</p>


                    </div>
                    <div className="col-lg-1 col-md-2 "></div>
                    <div className="col-lg-2 col-md-2 ">
                        <img id="orange" src={"Screenshot (17).png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-light  bg-warning text-center p-3 " >Simple orange</p>


                    </div>
                    <div className="col-lg-1 col-md-2 "></div>


                    <div className="col-lg-2 col-md-2 ">
                        <img id="green" src={"Screenshot (18).png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-light  bg-success text-center p-3 " >Simple green</p>


                    </div>
                    <div className="col-lg-2 col-md-1 "></div>


                    {/* row 2 */}
                    <div className="col-lg-2 col-md-1 "></div>

                    <div className="col-lg-2 col-md-2">
                        <img id="burlywood" src={"Screenshot (19).png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-dark   text-center p-3 " style={{ backgroundColor: "burlywood" }} >Simple wood finish</p>


                    </div>
                    <div className="col-lg-1 col-md-2"></div>
                    <div className="col-lg-2 col-md-2">
                        <img id="lightblue" src={"Screenshot (20).png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-dark  bg-info text-center p-3 " >Simple sky blue</p>


                    </div>
                    <div className="col-lg-1 col-md-2"></div>
                    <div className="col-lg-2 col-md-2">
                        <img id="pink" src={"Screenshot (22).png"} width={"100%"} height={"250px"}></img>
                        <p className="temp-info text-dark  text-center p-3 " style={{ backgroundColor: "pink" }}>Simple pink</p>


                    </div>
                    <div className="col-lg-2 col-md-1"></div>



                    {/* row 3 */}
                    <div className="col-lg-2 col-md-1 "></div>

                    <div className="col-lg-2 col-md-2">
                        <img id="default-c2" src={"c2.png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-light  bg-primary text-center p-3 " >Mid  default</p>


                    </div>
                    <div className="col-lg-1 col-md-2">

                    </div>
                    <div className="col-lg-2 col-md-2">
                        <img id="pink-c2" src={"pink2.png"} width={"100%"} height={"250px"}></img>
                        <p className="temp-info text-dark  text-center p-3 " style={{ backgroundColor: "pink" }}>Mid image pink</p>



                    </div>
                    <div className="col-lg-1 col-md-2"></div>
                    <div className="col-lg-2 col-md-2">
                        <img id="green-c2" src={"green-2.png"} width={"100%"} height={"250px"}></img>
                        <p className="temp-info text-light bg-success  text-center p-3 " style={{}}>Mid image green</p>



                    </div>
                    <div className="col-lg-2 col-md-1"></div>






                    {/* row 4 */}
                    <div className="col-lg-2 col-md-1 "></div>

                    <div className="col-lg-2 col-md-2">
                        <img id="orange-c2" src={"orange-c2.png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-light  bg-warning text-center p-3 " >Mid image orange</p>


                    </div>
                    <div className="col-lg-1 col-md-2">

                    </div>
                    <div className="col-lg-2 col-md-2">

                        <img id="burlywood-c2" src={"b-c2.png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-dark   text-center p-3 " style={{ backgroundColor: "burlywood" }} >Mid wood finish</p>


                    </div>
                    <div className="col-lg-1 col-md-2"></div>
                    <div className="col-lg-2 col-md-2">
                        <img id="lightblue-c2" src={"lb-c2.png"} width={"100%"} height={"250px"}></img>
                        <p className=" temp-info text-dark  bg-info text-center p-3 " >Mid image sky blue</p>

                    </div>
                    <div className="col-lg-2 col-md-1"></div>



                </div>

            </section >
        )
    }
}
export default Temp