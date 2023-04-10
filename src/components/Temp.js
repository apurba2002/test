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

    }
    render(){

        return(
            <section id="templete">
                    <div className="row">
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-8">
                            <h1 className="tem-head">
                                Take your style and create something awasome
                            </h1>
                        </div>
                        <div className="col-lg-2"></div>


                        {/* row 1 */}
                        <div className="col-lg-2"></div>

                        <div className="col-lg-2">
                            <img src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2">
                            <img src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2">
                            <img src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-2"></div>


                        {/* row 2 */}
                        <div className="col-lg-2"></div>

                        <div className="col-lg-2">
                            <img src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2">
                            <img src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2">
                            <img src={"Screenshot (16).png"} width={"100%"} height={"250px"}></img>


                        </div>
                        <div className="col-lg-2"></div>

                    </div>
                </section >
        )
    }
}
export default Temp