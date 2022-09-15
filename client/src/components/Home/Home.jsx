import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"; 
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Orders from "../Orders/Orders.jsx";
import Cards from "../Cards/Cards.jsx";
import { Link } from 'react-router-dom';
import { getAllGames } from '../../redux/actions/index.js';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGames())
    }, [])

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
            <Cards></Cards>
        </div>
    );
};

export default Home;