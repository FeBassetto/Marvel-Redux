import React from "react";
import style from './Header.module.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MdFavorite } from 'react-icons/md'
import ThemeChange from "./ThemeChange/ThemeChange";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.backgroundHeader};
    box-shadow: 0 0 1.5rem ${props => props.theme.shadowHeader};
`

const StyledLogo = styled.div`
    color: ${props => props.theme.colorHeader};
`

const StyledIcons = styled.div`
    color:${props => props.theme.colorHeader}
`

const DesktopHeader = () => {
    return (
        <StyledHeader className={style.header}>
            <Link to='/'>
                <StyledLogo className={style.header__logo}>
                    MARVEL HEROES
                </StyledLogo>
            </Link>

            <StyledIcons className={style.header__icons}>
                <ThemeChange/>
                <Link to='/favorites'>
                    <MdFavorite />
                </Link>
            </StyledIcons>
        </StyledHeader>
    )
}

export default DesktopHeader