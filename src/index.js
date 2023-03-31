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

const App = () => {
    return (
        <>
            <Navbar />
            <Baner />
            <About />
            <Tool />
            <Contact />
            <Privacy />
            <Credit />
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
