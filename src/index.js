import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './components/Navbar';
import Baner from './components/Baner';
import About from './components/About';
import Footer from './components/footer';
import ScrollToTop from './components/scroll';
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact';
import Credit from './components/Credit';
import Privacy from './components/Privacy';
import Tool from './components/Tool';
import Cover from './components/cover';
import Landing from './components/Landing';
import Temp from './components/Temp';
import MidNav from './components/Midnav';
import Baneradd from './components/Add';
import Team from './components/Team';

const App = () => {
    return (
        <>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Landing />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MidNav />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Baneradd />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Temp  />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <Tool />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <About />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            <Team />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Privacy />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Contact />
           
            <Footer />
           
           
           
        </> 


    );
}



const scroll = ReactDOM.createRoot(document.getElementById('scroll'));
scroll.render(<ScrollToTop />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
