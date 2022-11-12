import React from 'react';
import Card from '../Card/Card';
import styles from "./Cards.module.css"

const Cards = ({ pageGames }) => {

    return (
        <div className={styles.container}>
            <div className={styles.cardsContainer}>
                {
                    pageGames.length ? pageGames.map(game => {
                        return (
                            <Card
                            id={game.id}
                            img={game.img}
                            name={game.name}
                            genres={game.genres}
                            created={game.createDB}
                            />
                        )
                    }) : <div className={styles.loading}><h1>Cargando videojuegos...</h1></div>
                }
            </div>  
        </div>
    );
};

export default Cards;