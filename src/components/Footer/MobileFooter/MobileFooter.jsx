import React from "react";
import style from './MobileFooter.module.css'
import { Link } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'



const MobileFooter = () => {
    return(
        <div className={style.mobileFooter}>
            <nav className={style.mobileFooter__navigation}>
                <ul>
                    <li className={`${style.navigation__item} ${style.navigation__title}`}><Link to='/'>MH</Link></li>
                    <li className={style.navigation__item}><Link to='/'>Home</Link></li>
                    <li className={style.navigation__item}><Link to='/heroes'>Heróis</Link></li>
                    <li className={style.navigation__item}><Link to='/comics'>Quadrinhos</Link></li>
                    <li className={style.navigation__item}><Link to='/series'>Séries</Link></li>
                </ul>
            </nav>
            <h2 className={style.mobileFooter__copyright}>
                Copyright <AiOutlineCopyrightCircle /> 2022 | Todos Direitos Reservados | Criado por Felipe Bassetto
            </h2>
        </div>
    )
}

export default MobileFooter