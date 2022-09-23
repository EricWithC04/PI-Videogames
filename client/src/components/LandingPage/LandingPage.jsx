import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.welcome}>
                <h1>Bienvenido a mi PI-Videogames</h1>
                <p className={styles.text}>
                    Hola, soy Eric y este es mi PI de Videojuegos.
                    Esta es una aplicación desarrollada durante el bootcamp de Soy Henry
                    como PI (Proyecto Individual) para demostrar las habilidades desarrolladas
                    durante el mismo. Para acceder a la pagina principal, presiona el siguiente boton
                </p>
                <Link to="/Home">
                    <button className={styles.btn}>Ingresar</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;