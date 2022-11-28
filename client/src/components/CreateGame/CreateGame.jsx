import React from 'react';
import { Link } from 'react-router-dom';
import CreateGameForm from '../CreateGameForm/CreateGameForm';
import NavBar from '../NavBar/NavBar';
import styles from "./CreateGame.module.css";

const CreateGame = () => {
    return (
        <div className={styles.createGameForm}>
            <NavBar />
            <div className={styles.infoAndForm}>
                <p className={styles.info}>
                    Bienvenido a la ruta de creación de videojuego!! En esta sección
                    vas a poder crear tu propio videojuego y guardarlo en la base de datos
                    para posteriormente ser mostrado en la aplicación, para ello deberas
                    rellenar el formulario que tienes a un lado con la información requerida,
                    recuerda que debes colocar información valida o de lo contrario recibiras 
                    un error! Muchas Gracias!!.
                </p>
                <CreateGameForm></CreateGameForm>
            </div>
        </div>
    );
};

export default CreateGame;