import React from 'react'

import logoImage from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImage} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImage} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <a className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas.
                    <img src={purpleHeartIcon} alt="Coração"/>
                </span>
            </div>
        </div>
    );
};

export default Landing;
