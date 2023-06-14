import './team.css';
import React from "react"
import $ from "jquery"
class Landing extends React.Component {
    componentDidMount() {

    }
    render() {
        const headinganimation = () => {
            document.querySelector(".land-head").classList.add('landheadanimation')
        }
        const headinganimationremove = () => {
            document.querySelector(".land-head").classList.remove('landheadanimation')
        }
    
        return (
            <section id="landing" onMouseOver={headinganimation} onMouseOut={headinganimationremove}>
                <div className="container" style={{}}>

                    <h1 className="land-head" >
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