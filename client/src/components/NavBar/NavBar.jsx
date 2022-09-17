import React from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavBar = ({ setPage, setFilter }) => {
    return (
        <div>
            <img src="#" alt="logo" />
            <h4>About Me</h4>
            <SearchBar 
                setPage={setPage}
                setFilter={setFilter}
            />
        </div>
    );
};

export default NavBar;