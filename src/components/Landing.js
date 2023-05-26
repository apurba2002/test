import React from "react"
import $ from "jquery"
class Landing extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <section id="landing">
                <div className="container" style={{}}>

                    <h1 className="land-head">
                        Cover Creator: The ultimate tool for designing stunning book covers in minutes.
                    </h1>
                    <br></br>
                    <p>
                        Use it and make your life easier
                    </p>
                    <br>
                    </br>
                    <a href="#templete" ><button className="btn btn-primary">Use It Now</button></a>





                </div>
            </section>
        )
    }
}
export default Landing;