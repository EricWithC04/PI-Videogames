import React from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar = ({ setPage, setFilter }) => {
    return (
        <div className={styles.navBar}>
            <img src="#" alt="logo" />
            <h4>About Me</h4>
            <Link to="/Home/CreateGame">
                <button className={styles.btn}>Crear Videojuego</button>
            </Link>
            <SearchBar 
                setPage={setPage}
                setFilter={setFilter}
            />
        </div>
    );
};

export default NavBar;