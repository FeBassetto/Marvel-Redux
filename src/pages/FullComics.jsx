import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TitlePage from '../components/TitlePage/TitlePage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fullComicActions } from './../store/actions/fullComicAction';
import FullPageContent from './../components/FullPageContent/FullPageContent';
import Loading from './../components/Loading/Loading';

const FullComics = (props) => {

    const { comicId } = useParams()


    useEffect(() => {
        props.requestFullComics(comicId)
    }, [comicId, props.favorites])

    const comic = props.comic[0]

    return (
        <>
            {!props.loading && (
                <>
                    <TitlePage 
                    firstText='Tudo sobre'
                     span={`${comic.title.split(' ')[0]} ${comic.title.split(' ')[1]} ${comic.title.split(' ')[2]}`} />
                    <FullPageContent content={comic} />
                </>
            )
            }

            {
                props.loading && (
                    <Loading />
                )
            }
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(fullComicActions, dispatch)

const mapStateToProps = state => ({
    comic: state.fullComicReducer.comic,
    loading: state.fullComicReducer.loading,
    favorites: state.favoriteReducer.favoriteItems
})

export default connect(mapStateToProps, mapDispatchToProps)(FullComics)