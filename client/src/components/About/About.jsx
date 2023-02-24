import React from 'react';
import NavBar from '../NavBar/NavBar';
import foto from "../../img/fotoYo.jpg"
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.aboutContainer}>
                <div className={styles.name}>
                    <img src={foto} alt="foto" />
                    <h1>Eric A. Mercado</h1>
                </div>
                <div className={styles.text}>
                    <p>
                        Soy Fullstack Developer Jr, empecé en la programación cuando estaba en la secundaria, 
                        soy apasionado por la tecnología y el desarrollo.
                        Me empecé a interesar en la programación cuando tenía 13 años, en aquellos momentos
                        me interesaba bastante el desarrollo de videojuegos y tuve mis primeras experiencias programando
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