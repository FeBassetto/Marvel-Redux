import React, { useEffect } from "react";
import DataContent from "../components/DataContent/DataContent";
import TitlePage from "../components/TitlePage/TitlePage";
import SearchInput from './../components/SearchInput/SearchInput';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { comicsActions } from "../store/actions/comicsAction";


const Comics = (props) => {

    const { nameAlf, nameCronic, modifiedDec, modifiedCre, offset, favorites, search } = props

    useEffect(() => {
        props.requestComics()
    }, [nameAlf, nameCronic, modifiedDec, modifiedCre, offset, favorites, search])

    return (
        <>
            <TitlePage firstText='Pesquise seus' span='Quadrinhos' secondText='favoritos' />
            <SearchInput
                placeHolder='Pesquise um quadrinho'
                setNameStarts={props.setNameStarts}
                searchValue={props.search}
            />
            <DataContent
                filter='Título'
                data={props.comics}
                nameAlf={props.nameAlf}
                nameCronic={props.nameCronic}
                modifiedDec={props.modifiedDec}
                modifiedCre={props.modifiedCre}
                offset={props.offset}
                limit={props.limit}
                setSelect={props.setSelectComics}
                setOffset={props.setOffset}
                loading={props.loading}
            />
        </>
    )
}

const mapStateToProps = state => ({
    nameAlf: state.comicsReducer.selects.nameAlf,
    nameCronic: state.comicsReducer.selects.nameCronic,
    modifiedDec: state.comicsReducer.selects.modifiedDec,
    modifiedCre: state.comicsReducer.selects.modifiedCre,
    offset: state.comicsReducer.offset,
    comics: state.comicsReducer.comics,
    limit: state.comicsReducer.limit,
    search: state.comicsReducer.search,
    loading: state.comicsReducer.loading,
    favorites: state.favoriteReducer.favoriteItems
})

const mapDispatchToProps = dispatch => bindActionCreators(comicsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comics)