 import React from "react"
 import $ from "jquery"
 class Landing extends React.Component{
    componentDidMount(){
     
    }
    render(){
        return(
            <section id="landing">
                <div className="row">
                        <div className="col-lg-6">
                            <h1 className="land-head">
                                Ai is waiting for you 
                            </h1>
                            <br></br>
                            <p>
                                Use it and make your life easier
                            </p>
                            <br>
                            </br>
                            <a href="#templete" ><button className="btn btn-primary">Use It Now</button></a>
                            
                            
                            
                        </div>
                        <div className="col-lg-6">
                            <img className="side-img" src="166-Virtual-Reality.png"></img>
                        </div>
                </div>
            </section>
        )
    }
 }
 export default Landing;