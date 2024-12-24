import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from '../pages/home';
import '@fontsource/kumbh-sans';
import Footer from '../components/footer/footer';
import Services from '../pages/services';
import Projects from '../pages/projects';
import Projectdetails from '../pages/projectdetails';

function Myrouts() {
    return (
        <Router
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/details" element={<Projectdetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Myrouts;
