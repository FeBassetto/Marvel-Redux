import React from "react";
import style from './Banner.module.css'
import bannerImage from '../../assets/imgs/bannerImage.png'
import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <section className={style.banner}>
            <img 
            src={bannerImage} 
            alt="Banner Heroes" 
                className={style.banner__image}
            />
            <Link to='/' className={style.banner__link}>
                <button>Veja os últimos heróis marvel</button>
            </Link>
        </section>
    )
}

export default Banner