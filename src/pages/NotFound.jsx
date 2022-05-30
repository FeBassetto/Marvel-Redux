import React from "react";
import TitlePage from "../components/TitlePage/TitlePage";
import Button from './../components/Button/Button';


const NotFound = () => {
    return(
        <>
            <TitlePage span='404!' secondText='Página não encontrada' />
            <Button text='Voltar para Home' link='/' />
        </>
    )
}

export default NotFound