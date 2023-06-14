import './team.css';

const Team = () => {
    const headinganimation = () => {
        document.querySelector("#cd-grp-total").classList.add('headanimation')
    }
    const headinganimationremove = () => {
        document.querySelector("#cd-grp-total").classList.remove('headanimation')
    }

    return (
        <section id="team" onMouseOver={headinganimation} onMouseOut={headinganimationremove}>
            <h1 className='heading' >
                Our team
            </h1>
            <div id='cd-grp-total'>
                <div className='cd-grp'>
                    <div className='cd' onMouseOver={() => { document.querySelector("#apurba").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#apurba").classList.remove('imageanimation') }}>
                        <img className="image" id='apurba' src='apurba.jpg' alt='' ></img>

                        <h1>Apurba Debnath</h1>
                        <p>Full Stack Developer</p>

                    </div>
                    <div className='cd' onMouseOver={() => { document.querySelector("#mitu").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#mitu").classList.remove('imageanimation') }}>
                        <img className="image" id='mitu' src='armita.jpg' alt='' ></img>

                        <h1>Armita Sarker Mitu</h1>
                        <p>Frontend Developer</p>

                    </div>
                    <div className='cd cd-3' onMouseOver={() => { document.querySelector("#tahmid").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#tahmid").classList.remove('imageanimation') }}>
                        <img className="image" id='tahmid' src='tahmid.jpg' alt='' ></img>

                        <h1>TAHMID KHAIYAM AMIN</h1>
                        <p>Quality testing engineer</p>

                    </div>
                </div>




                <div className='cd-grp'>
                    <div className='cd' onMouseOver={() => { document.querySelector("#anik").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#anik").classList.remove('imageanimation') }}>
                        <img className="image" id='anik' src='anik.jpg' alt='' ></img>

                        <h1>MD Jonaid Al Anik</h1>
                        <p>Software Developer</p>

                    </div>
                    <div className='cd' onMouseOver={() => { document.querySelector("#shuvo").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#shuvo").classList.remove('imageanimation') }}>
                        <img className="image" id='shuvo' src='shuvo.jpg' alt='' ></img>

                        <h1>Shuvo Kumar Paul</h1>
                        <p>Exeutive</p>

                    </div>
                    <div className='cd cd-3' onMouseOver={() => { document.querySelector("#anis").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#anis").classList.remove('imageanimation') }}>
                        <img className="image" id='anis' src='anis.jpg' alt='' ></img>

                        <h1>Abu Horira Al Anis</h1>
                        <p>Exeutive</p>

                    </div>
                </div>





                <div className='cd-grp'>
                    <div className='cd' onMouseOver={() => { document.querySelector("#adom").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#adom").classList.remove('imageanimation') }}>
                        <img className="image" id='adom' src='adom.jpg' alt='' ></img>

                        <h1>Md Adum Mosaruf</h1>
                        <p>Graphic Designer</p>

                    </div>
                    <div className='cd' onMouseOver={() => { document.querySelector("#mridul").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#mridul").classList.remove('imageanimation') }}>
                        <img className="image" id='mridul' src='mridul.jpg' alt='' ></img>

                        <h1>Al Shariya Mredul</h1>
                        <p>Graphic Designer </p>

                    </div>
                    <div className='cd cd-3' onMouseOver={() => { document.querySelector("#babli").classList.add('imageanimation') }} onMouseOut={() => { document.querySelector("#babli").classList.remove('imageanimation') }}>
                        <img className="image" id='babli' src='babli.jpg' alt='' ></img>

                        <h1>Muskan Jahan Babli</h1>
                        <p>Graphic Designer</p>

                    </div>
                </div>
            </div>




        </section>
    )
}
export default Team;