import React from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar = ({ setPage, setFilter }) => {
    return (
        <div className={styles.navBar}>
            <img src="#" alt="logo" />
            <h4 className={styles.text}>About Me</h4>
            <Link to="/Home/CreateGame" style={{ textDecoration: "none" }}>
                <h4 className={styles.text}>Crear Videojuego</h4>
            </Link>
            <SearchBar 
                setPage={setPage}
                setFilter={setFilter}
            />
        </div>
    );
};

export default NavBar;