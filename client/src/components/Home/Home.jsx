import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Orders from "../Orders/Orders.jsx";
import Cards from "../Cards/Cards.jsx";
import Paginated from '../Paginated/Paginated.jsx';
import { Link } from 'react-router-dom';
import { getAllGames } from '../../redux/actions/index.js';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGames())
    }, [])

    const allGames = useSelector(state => state.allGames);
    
    const [ actualPage, setActualPage ] = useState(1);
    const [ gamesPerPage, setGamesPerPage ] = useState(12);
    const lastGame = actualPage * gamesPerPage;
    const firstGame = lastGame - gamesPerPage;
    const paginated = (num) => {
        setActualPage(num)
    }
    const currentPage = allGames.slice(firstGame, lastGame);

    return (
        <div>
            <h1>Bienvenido a mi PI-Videogames</h1>
            <NavBar></NavBar>
            <Orders></Orders>
            <Filters></Filters>
            <Link to="/Home/CreateGame">
                <button>Crear Videojuego</button>
            </Link>
            <Paginated 
                setPage={paginated}
                allGames={allGames.length}
                gamesPerPage={gamesPerPage}
            />
            <Cards 
                pageGames={currentPage}
            />
        </div>
    );
};

export default Home;