import React from "react";
import style from './Banner.module.css'
import bannerImage from '../../assets/imgs/bannerImage.png'
import marvelLogo from '../../assets/imgs/marvelLogo.jpeg'
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <section className={style.banner}>
            <Carousel>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={marvelLogo}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p className={style.banner__title}>MARVEL HERO</p>
                        <h2 className={style.banner__subTitle}>Descubra e pesquise sobre todos seus heróis favoritos</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Link to='heroes/1009407' className={style.banner__link}>
                            <button>Veja mais sobre novo herói Loki</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Banner