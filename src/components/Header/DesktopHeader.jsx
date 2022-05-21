import React from "react";
import style from './DesktopHeader.module.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.backgroundHeader};
    box-shadow: 0 0 1rem ${props => props.theme.shadowHeader};
`

const StyledLogo = styled.div`
    color: ${props => props.theme.background};
`

const DesktopHeader = () => {
    return (
        <StyledHeader className={style.header}>
            <Link to='/'>
                <StyledLogo className={style.header__logo}>
                    MARVEL HEROES
                </StyledLogo>
            </Link>
        </StyledHeader>
    )
}

export default DesktopHeader