import React from "react"
class Baneradd extends React.Component {


    render() {
        return (
            <section id="baneradd">
                <img alt="image" src="baneradd.jpg"></img>
                <div>

                    <h1>Cover Creator: The ultimate tool for designing stunning covers in minutes. </h1>
                    <br></br>
                    <p>So what are you waiting for? Create your one now.</p>
                    <button className="btn btn-primary" id="baneraddbtn" onClick={() => { window.location.href = "#templete" }}>Create Your Cover with Us</button>
                </div>


            </section>
        )
    }
}
export default Baneradd;