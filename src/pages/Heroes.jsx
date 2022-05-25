import React from "react";
import HeroesContent from "../components/HeroesContent/HeroesContent";
import TitlePage from "../components/TitlePage/TitlePage";
import SearchInput from './../components/SearchInput/SearchInput';


const Heroes = () => {
    return(
        <>
            <TitlePage firstText='Pesquise seus' span='Heróis' secondText='favoritos' />
            <SearchInput placeHolder='Pesquise um herói'/>
            <HeroesContent/>
        </>
    )
}

export default Heroes