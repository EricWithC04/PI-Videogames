import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Orders from "../Orders/Orders.jsx";
import Cards from "../Cards/Cards.jsx";
import Paginated from '../Paginated/Paginated.jsx';
import { getAllGames } from '../../redux/actions/index.js';
import styles from "./Home.module.css";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGames())
    }, [])

    const allGames = useSelector(state => state.allGames);
    const filteredGames = useSelector(state => state.filteredGames)
    
    const [ actualPage, setActualPage ] = useState(1);
    const [ gamesPerPage, setGamesPerPage ] = useState(15);
    const [ filter, setFilter ] = useState(false);
    const lastGame = actualPage * gamesPerPage;
    const firstGame = lastGame - gamesPerPage;
    const paginated = (num) => {
        setActualPage(num)
    }
    const filters = (value) => {
        setFilter(value)
    }

    const currentPage = filter ? 
        filteredGames.slice(firstGame, lastGame) : 
        allGames.slice(firstGame, lastGame)

    return (
        <div className={styles.container}>
            <NavBar 
                setPage={paginated}
                setFilter={filters}
            />
            <Orders 
                setPage={paginated}
            />
            <Filters 
                setPage={paginated}
                setFilter={filters}
            />
            <Paginated 
                setPage={paginated}
                allGames={filter ? filteredGames.length : allGames.length}
                gamesPerPage={gamesPerPage}
            />
            <Cards 
                pageGames={currentPage}
            />
        </div>
    );
};

export default Home;