import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container/Container";
import Home from './pages/Home';
import Header from './components/Header/Header/Header';
import Footer from './components/Footer/Footer';
import Favorites from "./pages/Favorites";
import Heroes from './pages/Heroes';


const Routing = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path="/heroes" element={<Heroes/>} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default Routing