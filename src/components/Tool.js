import React from "react"
import $ from "jquery"
import 'animate.css';
import { ReactDOM } from "react"
import anime from 'animejs/lib/anime.es.js';


import { render } from "@testing-library/react"
import { Link } from "react-router-dom"
import Baner from "./Baner"
class Tool extends React.Component {
    componentDidMount() {

        $("#tool").mouseover(function () {
            $("h2").addClass("heading-animation");
        });

        $("#tool").mouseout(function () {
            $("h2").removeClass("heading-animation");
        });


        var pr = 0
        $("#next3").click(() => {
            if (($("#department").val()) === "") {
                $("#department").css("border-color", "red")
            }
            else {
                if (($("#shift").val()) === "") {
                    $("#shift").css("border-color", "red")
                }
                else {
                    if (($("#theme-change").val()) === "") {
                        $("#theme-change").css("border-color", "red")
                    }
                    else {
                        var subname = document.getElementById('sub-name').value
                        var jobname = document.getElementById('job-name').value
                        var studentname = document.getElementById('student-name').value
                        var rollnumber = document.getElementById('roll-number').value

                        var shift = $('#shift').val()
                        sessionStorage.setItem("shift", shift)
                        var teachername = document.getElementById('teacher-name').value
                        sessionStorage.setItem("subname", subname)

                        sessionStorage.setItem("jobname", jobname)
                        sessionStorage.setItem("studentname", studentname)
                        sessionStorage.setItem("rollnumber", rollnumber)
                        var department = $("#department").val()
                        sessionStorage.setItem("department", department)


                        sessionStorage.setItem("teachername", teachername)


                        var jobno = $("#job-no").val()
                        sessionStorage.setItem("job-no", jobno)
                        var semester = $("#semester").val()
                        sessionStorage.setItem("semester", semester)

                        window.location.href = "cover.html";




                    }
                }
            }

        })

        $("#next1").click(function () {
            if (($("#sub-name").val()) === "") {


                $("#sub-name").css("border-color", "red")
            }
            else {
                if (($("#job-name").val()) === "") {

                    $("#job-name").css("border-color", "red")

                }
                else {
                    if (($("#job-no").val()) === "") {

                        $("#job-no").css("border-color", "red")
                    }
                    else {
                        $(".tool-input").css("border-color", "lightgray")
                        $("#next-1").hide("slow")

                        $("#next-2").show("slow")

                    }
                }
            }


        })
        $("#next2").click(function () {
            if (($("#teacher-name").val()) === "") {


                $("#teacher-name").css("border-color", "red")
            }
            else {
                if (($("#student-name").val()) === "") {
                    $("#student-name").css("border-color", "red")
                }
                else {
                    if (($("#roll-number").val()) === "") {
                        $("roll-number").css("border-color", "red")
                    }
                    else {
                        $(".tool-input").css("border-color", "lightgray")
                        $("#next-2").hide("slow")

                        $("#next-3").show("slow")

                    }
                }


            }



        })
        $("#back3").click(function () {
            $("#next-3").hide("slow")

            $("#next-2").show("slow")

        })
        $("#back2").click(function () {
            $("#next-2").hide("slow")

            $("#next-1").show("slow")

        })
        $(".b2").click(() => {
            $("#tool").hide()
            $("#templete").show()
        })


    }

    render() {
        return (
            <>



                <div className="main" id="tool" style={{ paddingBottom: "150px" }}>




                    <div className="row">
                        <div className="col-lg-2 col-xxl-2">





                        </div>
                        <div className="col-lg-8 col-xxl-8" >
                            <h2 style={{ textAlign: "left", marginLeft: "10%", marginBottom: "50px", marginTop: "50px", }}>
                                Enter your details and create something awsome
                            </h2>

                            <section id="next-1">
                                <div className="input-group">

                                    <input type="text" className="tool-input " id="sub-name" aria-label="First name"
                                        placeholder="Enter the subject name" />


                                </div>
                                <div className="input-group">

                                    <input type="text" className="tool-input " id="job-name" aria-label="First name"
                                        placeholder="Enter job name" />


                                </div>
                                <div className="input-group">

                                    <input type="text" className="tool-input " id="job-no" aria-label="First name"
                                        placeholder="Enter job no" />


                                </div>



                                <div className="row">
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-danger b2" >Back</button>


                                    </div>
                                    <div className="col-lg-6 col-xxl-6">
                                        <button type="button" className="btn btn-success" id="next1">Next</button>
                                    </div>

                                </div>
                            </section>
                            <section id="next-2">

                                <div className="input-group">

                                    <input type="text" className="tool-input " id="teacher-name" aria-label="First name"
                                        placeholder="Enter teacher's name" />

                                </div>
                                <div className="input-group">

                                    <input type="text " className="tool-input " id="student-name" aria-label="First name"
                                        placeholder="Enter student's name" />


                                </div>

                                <div className="input-group">

                                    <input type="text" className="tool-input " id="roll-number" aria-label="First name"
                                        placeholder="Enter roll number" />


                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-danger" id="back2">Back</button>


                                    </div>
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-success" id="next2">Next</button>
                                    </div>

                                </div>
                            </section>
                            <section id="next-3">
                                <div className="input-group">

                                    <select name="" id="semester" className="tool-input">
                                        <option >Select your semester</option>
                                        <option value="1st semester">1st semester</option>
                                        <option value="2nd semester">2nd semester</option>
                                        <option value="3rd semester">3rd semester</option>
                                        <option value="4th semester">4th semester</option>
                                        <option value="5th semester">5th semester</option>
                                        <option value="6th semester">6th semester</option>
                                        <option value="7th semester">7th semester</option>
                                        <option value="8th semester">8th semester</option>

                                    </select>



                                </div>
                                <div className="input-group">


                                    <select name="" id="department" className="tool-input">
                                        <option >Select your department</option>
                                        <option value="Computer Technology ">Computer Technology</option>
                                        <option value="Printing Technology">Printing Technology</option>
                                        <option value="Graphics design Technology">Graphics Design</option>
                                    </select>


                                </div>
                                <div className="input-group">

                                    <select name="" id="shift" className="tool-input">
                                        <option >Select your shift</option>
                                        <option value="1st shift">1st shift</option>
                                        <option value="2nd shift">2nd shift</option>

                                    </select>


                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-danger" id="back3"> Back</button>


                                    </div>
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-success" id="next3"
                                        >Submit</button>
                                    </div>

                                </div>
                            </section>





                        </div>
                        <div className="col-lg-2 col-xxl-2" >







                        </div>



                    </div>

                </div >
            </>













        );
    }
}
export default Tool;