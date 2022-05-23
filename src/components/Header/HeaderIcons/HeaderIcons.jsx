import React from "react";
import style from './HeaderIcons.module.css'

import { MdFavorite } from 'react-icons/md'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import ThemeChange from './../ThemeChange/ThemeChange';

const StyledIcons = styled.div`
    color:${props => props.theme.colorPrimary}
`

const HeaderIcons = () => {
    return (
        <StyledIcons className={style.header__icons}>
            <ThemeChange />
            <Link to='/favorites'>
                <MdFavorite />
            </Link>
        </StyledIcons>
    )
}

export default HeaderIcons