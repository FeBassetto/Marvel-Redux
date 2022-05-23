import React from "react";
import style from './Footer.module.css'
import styled from 'styled-components';
import DesktopFooter from './DesktopFooter/DesktopFooter';
import MobileFooter from "./MobileFooter/MobileFooter";

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.backgroundSecondary};
    color:${props => props.theme.colorSecondary};
`

const Footer = () => {
    return (
        <StyledFooter className={style.footer}>
            <DesktopFooter />
            <MobileFooter/>
        </StyledFooter>
    )
}

export default Footer