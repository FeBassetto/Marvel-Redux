import React from "react";
import style from './DesktopFooter.module.css'
import { Link } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'


const DesktopFooter = () => {
    return (
        <div className={style.desktopFooter}>
            <div className={style.desktopFooter__container}>
                <h1 className={style.desktopFooter__title}><Link to='/'>MARVEL HEROES</Link></h1>
                <nav className={style.desktopFooter__navigation}>
                    <ul>
                        <li className={style.desktopNavigation__item}><Link to='/'>Home</Link></li>
                        <li className={style.desktopNavigation__item}><Link to='/heroes'>Heróis</Link></li>
                        <li className={style.desktopNavigation__item}><Link to='/comics'>Quadrinhos</Link></li>
                        <li><Link to='/series'>Séries</Link></li>
                    </ul>
                </nav>
            </div>
            <h2 className={style.desktopFooter__copyright}>
                Copyright <AiOutlineCopyrightCircle /> 2022 | Todos Direitos Reservados | Criado por Felipe Bassetto
            </h2>
        </div>
    )
}

export default DesktopFooter