import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container/Container";
import Home from './pages/Home';
import Header from './components/Header/Header/Header';
import Footer from './components/Footer/Footer';
import Favorites from "./pages/Favorites";
import Heroes from './pages/Heroes';
import Comics from "./pages/Comics";
import Series from './pages/Series';
import FullHero from "./pages/FullHero";
import FullComics from "./pages/FullComics";
import FullSeries from './pages/FullSerie';


const Routing = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/heroes' element={<Heroes />} />
                    <Route path='/comics' element={<Comics />} />
                    <Route path='/series' element={<Series />} />
                    <Route path='/heroes/:heroId' element={<FullHero />} />
                    <Route path='/comics/:comicId' element={<FullComics />} />
                    <Route path='/series/:serieId' element={<FullSeries />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default Routing