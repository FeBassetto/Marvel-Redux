import React, { useEffect } from "react";
import DataContent from "../components/DataContent/DataContent";
import TitlePage from "../components/TitlePage/TitlePage";
import SearchInput from './../components/SearchInput/SearchInput';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { seriesActions } from "../store/actions/seriesAction";


const Series = (props) => {

    const { nameAlf, nameCronic, modifiedDec, modifiedCre, offset, favorites, search } = props

    useEffect(() => {
        props.requestSeries()
    }, [nameAlf, nameCronic, modifiedDec, modifiedCre, offset, favorites, search])

    return (
        <>
            <TitlePage firstText='Pesquise seus' span='Quadrinhos' secondText='favoritos' />
            <SearchInput
                placeHolder='Pesquise um quadrinho'
                setNameStarts={props.setNameStarts}
            />
            <DataContent
                filter='Título'
                data={props.series}
                nameAlf={props.nameAlf}
                nameCronic={props.nameCronic}
                modifiedDec={props.modifiedDec}
                modifiedCre={props.modifiedCre}
                offset={props.offset}
                limit={props.limit}
                setSelect={props.setSelectSeries}
                setOffset={props.setOffset}
                loading={props.loading}
            />
        </>
    )
}

const mapStateToProps = state => ({
    nameAlf: state.seriesReducer.selects.nameAlf,
    nameCronic: state.seriesReducer.selects.nameCronic,
    modifiedDec: state.seriesReducer.selects.modifiedDec,
    modifiedCre: state.seriesReducer.selects.modifiedCre,
    offset: state.seriesReducer.offset,
    series: state.seriesReducer.series,
    limit: state.seriesReducer.limit,
    search: state.seriesReducer.search,
    loading: state.seriesReducer.loading,
    favorites: state.favoriteReducer.favoriteItems
})

const mapDispatchToProps = dispatch => bindActionCreators(seriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Series)