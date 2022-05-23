import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Home from './pages/Home';


const Routing = () => {
    return (
        <Router>
        <Header/>
            <Container>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Container>
        </Router>
    )
}

export default Routing