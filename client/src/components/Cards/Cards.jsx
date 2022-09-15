import React from 'react';
import { useSelector } from "react-redux";
import Card from '../Card/Card';

const Cards = ({ pageGames }) => {

    return (
        <div>
            {
                pageGames.length ? pageGames.map(game => {
                    return (
                        <Card
                        img={game.img}
                        name={game.name}
                        genres={game.genres}
                        />
                    )
                }) : <div>Cargando videojuegos...</div>
            }
        </div>
    );
};

export default Cards;