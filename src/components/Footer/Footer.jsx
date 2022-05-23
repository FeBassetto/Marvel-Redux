import React from "react";
import style from './Footer.module.css'
import styled from 'styled-components';
import DesktopFooter from './DesktopFooter/DesktopFooter';

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.backgroundSecondary};
    color:${props => props.theme.colorSecondary};
`

const Footer = () => {
    return (
        <StyledFooter className={style.footer}>
            <DesktopFooter />
        </StyledFooter>
    )
}

export default Footer