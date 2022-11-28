import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { browseApiGame } from '../../redux/actions';
import styles from "./SearchBar.module.css";

const SearchBar = ({ setPage, setFilter }) => {

    const dispatch = useDispatch()
    const history = useHistory();
    const [inputText, setInputText] = useState("")
    const games = useSelector(state => state.allGames)
    console.log(games)

    const handleChange = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(browseApiGame(inputText))
        setFilter(true)
        setPage(1)
        setInputText("")
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => handleChange(e)} placeholder='Game...'></input>
            <button type='submit' className={styles.btn}>Buscar</button>
        </form>
    );
};

export default SearchBar;