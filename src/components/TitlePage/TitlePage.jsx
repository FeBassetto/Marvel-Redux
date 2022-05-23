import React from "react";
import style from './TitlePage.module.css'
import styled from 'styled-components';

const StyledSpan = styled.span`
    color: ${props => props.theme.colorPrimary};
    background-color: ${props => props.theme.backgroundPrimary}
`

const TitlePage = ({firstText, span, secondText}) => {
    return(
        <h1 className={style.titlePage}>
            {firstText} <StyledSpan  className={style.titlePage__span}>{span}</StyledSpan> {secondText}
        </h1>
    )
}

export default TitlePage