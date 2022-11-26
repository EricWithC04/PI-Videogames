import React from 'react';
import { Link } from 'react-router-dom';
import back from "../../img/back.png";
import NavBar from '../NavBar/NavBar';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            {/* <Link to="/Home" className={styles.back}>
                <img src={back} alt="back" />
            </Link> */}
            <div className={styles.aboutContainer}>
                <div className={styles.name}>
                    <h1>Eric A. Mercado</h1>
                </div>
                <div className={styles.text}>
                    <p>
                        Soy Fullstack Developer Jr, empecé en la programación a los 13 años, 
                        soy apasionado por la tecnología y me encanta participar 
                        en proyectos desafiantes e innovadores.
                        Me capacite principalmente en el Bootcamp de Soy Henry, en el cual desarrollé
                        esta aplicación como un Proyecto Final. Las tecnologías utilizadas fueron HTML,
                        CSS Modules, JavaScript, React, Redux, Node.js, Express y PostgreSQL. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;