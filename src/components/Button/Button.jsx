import React from "react";
import style from './Button.module.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledButton = styled.button`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.colorPrimary}
`

const Button = ({ text, link }) => {
    return (
        <div className={style.buttonContainer} >
            <Link to={link}>
                <StyledButton className={style.button}>
                    {text}
                </StyledButton>
            </Link>
        </div>
    )
}

export default Button