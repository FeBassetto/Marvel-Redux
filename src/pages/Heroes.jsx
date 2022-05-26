import React from "react";
import HeroesContent from "../components/DataContent/DataContent";
import TitlePage from "../components/TitlePage/TitlePage";
import SearchInput from './../components/SearchInput/SearchInput';
import { connect } from "react-redux";


const Heroes = (props) => {
    return (
        <>
            <TitlePage firstText='Pesquise seus' span='Heróis' secondText='favoritos' />
            <SearchInput placeHolder='Pesquise um herói' />
            <HeroesContent
                data={props.characters}
                filter='Nome'
                nameCronic={false}
                nameAlf={false}
                modifiedDec={false}
                modifiedCre={false}
                offset={1}
                limit={90}
            />
        </>
    )
}

const mapStateToProps = state => ({
    characters: state.HomePage.lastHeroes
})

export default connect(mapStateToProps, null)(Heroes)