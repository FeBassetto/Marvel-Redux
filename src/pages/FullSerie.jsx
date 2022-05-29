import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TitlePage from '../components/TitlePage/TitlePage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fullSerieActions } from './../store/actions/fullSerieAction';
import FullPageContent from './../components/FullPageContent/FullPageContent';
import Loading from './../components/Loading/Loading';
import Button from './../components/Button/Button';

const FullSeries = (props) => {

    const { serieId } = useParams()


    useEffect(() => {
        props.requestFullSeries(serieId)
    }, [serieId, props.favorites])

    const serie = props.serie[0]

    return (
        <>
            {!props.loading && !props.error && (
                <>
                    <TitlePage 
                    firstText='Tudo sobre'
                     span={`${serie.title.split(' ')[0]} ${serie.title.split(' ')[1]} ${serie.title.split(' ')[2]}`} />
                    <FullPageContent content={serie} />
                </>
            )
            }

            {props.error && (
                <>
                    <TitlePage firstText='OPS... Não conseguimos encontrar esta' span='série' />
                    <Button text='Procure outra série' link='/series' />
                </>
            )}

            {
                props.loading && (
                    <Loading />
                )
            }
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(fullSerieActions, dispatch)

const mapStateToProps = state => ({
    serie: state.fullSerieReducer.serie,
    loading: state.fullSerieReducer.loading,
    error: state.fullSerieReducer.error,
    favorites: state.favoriteReducer.favoriteItems
})

export default connect(mapStateToProps, mapDispatchToProps)(FullSeries)