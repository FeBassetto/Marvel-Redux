import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container/Container";
import Home from './pages/Home';
import Header from './components/Header/Header/Header';
import Footer from './components/Footer/Footer';


const Routing = () => {
    return (
        <Router>
        <Header/>
            <Container>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}

export default Routing