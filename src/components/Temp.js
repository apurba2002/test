import React from "react";
import $ from "jquery"
class Temp extends React.Component{
    componentDidMount(){
        $("#templete").mouseover(()=>{
            $(".tem-head").addClass("temp-animation")
        })
        $("#templete").mouseout(()=>{
            $(".tem-head").removeClass("temp-animation")
        })
        $("#default").click(()=>{
            var theme = "default"
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
        })
        $("#orange").click(()=>{
            var theme = "orange"
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
        })
        $("#green").click(()=>{
            var theme = "green"
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
        })
        $("#pink").click(()=>{
            var theme = "pink"
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
        })
        $("#lightblue").click(()=>{
            var theme = "lightblue"
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
        })
        $("#burlywood").click(()=>{
            var theme = "burlywood"
            sessionStorage.setItem("theme", theme)
            $("#templete").hide()
            $("#tool").show()
        })





    }
    render(){

        return(
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


                        </div>
                        <div className="col-lg-1 col-md-2 "></div>
                        <div className="col-lg-2 col-md-2 ">
                            <img id="orange" src={"Screenshot (17).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1 col-md-2 "></div>
                       
                       
                        <div className="col-lg-2 col-md-2 ">
                            <img id="green" src={"Screenshot (18).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-2 col-md-1 "></div>


                        {/* row 2 */}
                        <div className="col-lg-2 col-md-1 "></div>

                        <div className="col-lg-2 col-md-2">
                            <img id="burlywood" src={"Screenshot (19).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1 col-md-2"></div>
                        <div className="col-lg-2 col-md-2">
                            <img id="lightblue" src={"Screenshot (20).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1 col-md-2"></div>
                        <div className="col-lg-2 col-md-2">
                            <img id="pink" src={"Screenshot (22).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-2 col-md-1"></div>

                    </div>
                </section >
        )
    }
}
export default Temp