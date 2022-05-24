import React from "react";
import FavoritesContent from "../components/FavoritesContent/FavoritesContent";
import TitlePage from './../components/TitlePage/TitlePage';


const Favorites = () => {
    return(
        <>
             <TitlePage firstText='Seus itens' span='Marvel' secondText='Favoritados'/>
             <FavoritesContent/>
        </>
    )
}

export default Favorites