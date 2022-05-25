import React from "react";
import HeroesContent from "../components/HeroesContent/HeroesContent";
import TitlePage from "../components/TitlePage/TitlePage";


const Heroes = () => {
    return(
        <>
            <TitlePage firstText='Pesquise seus' span='Heróis' />
            <HeroesContent/>
        </>
    )
}

export default Heroes