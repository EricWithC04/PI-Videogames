import React from 'react';
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Orders from "../Orders/Orders.jsx";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a mi PI-Videogames</h1>
            <NavBar></NavBar>
            <Orders></Orders>
            <Filters></Filters>
            <Link to="/Home/CreateGame">
                <button>Crear Videojuego</button>
            </Link>
            <p>este va a ser el paginado</p>
            <p>acá van a aparecer los videogames</p>
        </div>
    );
};

export default Home;