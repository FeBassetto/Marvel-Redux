import React from "react";
import Banner from "../components/Banner/Banner";
import LastHeroes from "../components/LastHeroes/LastHeroes";
import TitlePage from "../components/TitlePage/TitlePage";


const Home = () => {
    return(
        <>
            <TitlePage firstText='Descubra mais sobre o universo' span='Marvel'/>
            <Banner/>
            <LastHeroes/>
        </>
    )
}

export default Home