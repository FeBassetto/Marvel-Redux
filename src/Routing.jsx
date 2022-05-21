import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container/Container";
import Home from './pages/Home';


const Routing = () => {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Container>
        </Router>
    )
}

export default Routing