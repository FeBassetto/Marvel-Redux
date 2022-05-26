import React, { useEffect } from "react";
import DataContent from "../components/DataContent/DataContent";
import TitlePage from "../components/TitlePage/TitlePage";
import SearchInput from './../components/SearchInput/SearchInput';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { heroesActions } from "../store/actions/heroesAction";


const Heroes = (props) => {

    const { nameAlf, nameCronic, modifiedDec, modifiedCre, offset, favorites, search } = props

    useEffect(() => {
        props.requestHeroes()
    }, [nameAlf, nameCronic, modifiedDec, modifiedCre, offset, favorites, search])

    return (
        <>
            <TitlePage firstText='Pesquise seus' span='Heróis' secondText='favoritos' />
            <SearchInput
                placeHolder='Pesquise um herói'
                setNameStarts={props.setNameStarts}
            />
            <DataContent
                filter='Nome'
                data={props.heroes}
                nameAlf={props.nameAlf}
                nameCronic={props.nameCronic}
                modifiedDec={props.modifiedDec}
                modifiedCre={props.modifiedCre}
                offset={props.offset}
                limit={props.limit}
                setSelect={props.setSelectHeroes}
                setOffset={props.setOffset}
                loading={props.loading}
            />
        </>
    )
}

const mapStateToProps = state => ({
    nameAlf: state.heroesReducer.selects.nameAlf,
    nameCronic: state.heroesReducer.selects.nameCronic,
    modifiedDec: state.heroesReducer.selects.modifiedDec,
    modifiedCre: state.heroesReducer.selects.modifiedCre,
    offset: state.heroesReducer.offset,
    heroes: state.heroesReducer.heroes,
    limit: state.heroesReducer.limit,
    favorites: state.favoriteReducer.favoriteItems,
    search: state.heroesReducer.search,
    loading: state.heroesReducer.loading
})

const mapDispatchToProps = dispatch => bindActionCreators(heroesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)