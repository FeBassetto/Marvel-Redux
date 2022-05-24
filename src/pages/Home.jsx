import React from "react";
import Banner from "../components/Banner/Banner";
import TitlePage from "../components/TitlePage/TitlePage";
import HomePageContent from '../components/HomePageContent/HomePageContent';


const Home = () => {
    return(
        <>
            <TitlePage firstText='Descubra mais sobre o universo' span='Marvel'/>
            <Banner/>
            <HomePageContent/>
        </>
    )
}

export default Home