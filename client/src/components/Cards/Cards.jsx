import React from 'react';
import Card from '../Card/Card';

const Cards = ({ pageGames }) => {

    return (
        <div>
            {
                pageGames.length ? pageGames.map(game => {
                    return (
                        <Card
                        id={game.id}
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