import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <>
            <Navbar />
            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
            <ScrollToTop />
        </>
    );
}

export default App;