import React from "react";
import style from './Container.module.css'
import styled from 'styled-components'

const StyledContainer = styled.main`
background-color: ${props => props.theme.background}
`

const Container = ({children}) => {
    return(
        <StyledContainer className={style.container}>
            {children}
        </StyledContainer>
    )
}

export default Container