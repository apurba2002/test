 import React from "react"
 import $ from "jquery"
 class Landing extends React.Component{
    componentDidMount(){
     
    }
    render(){
        return(
            <section id="landing">
                <div className="container" style={{}}>
                        <div className="left" >
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
                        <div className="right">
                            <img style={{width:"100%"}} className="side-img" src="166-Virtual-Reality.png"></img>
                        </div>
                </div>
            </section>
        )
    }
 }
 export default Landing;