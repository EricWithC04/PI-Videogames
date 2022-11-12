import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Link to="/Home">
                <h1>Volver</h1>
            </Link>
            <h1 className={styles.name}>Eric A. Mercado</h1>
            <p className={styles.text}>
                Soy Fullstack Developer Jr, empecé en la programación a los 13 años, 
                soy apasionado por la tecnología y me encanta participar 
                en proyectos desafiantes e innovadores.
                Me capacite principalmente en el Bootcamp de Soy Henry, en el cual desarrollé
                esta aplicación como un Proyecto Final. Las tecnologías utilizadas fueron HTML,
                CSS Modules, JavaScript, React, Redux, Node.js, Express y PostgreSQL. 
            </p>
        </div>
    );
};

export default About;