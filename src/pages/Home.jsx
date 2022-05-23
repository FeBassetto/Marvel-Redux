import React from "react";
import Banner from "../components/Banner/Banner";
import TitlePage from "../components/TitlePage/TitlePage";


const Home = () => {
    return(
        <>
            <Banner/>
            <TitlePage firstText='Descubra mais sobre o universo' span='Marvel'/>
        </>
    )
}

export default Home