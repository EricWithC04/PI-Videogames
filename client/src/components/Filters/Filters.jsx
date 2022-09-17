import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByGenres, filterByCreated, getGenres } from '../../redux/actions';

const Filters = ({ setPage, setFilter }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const genres = useSelector(state => state.allGenres)

    const handleFilterGenre = (e) => {
        e.preventDefault();
        if (e.target.value.length) {
            dispatch(filterByGenres(e.target.value))
            setFilter(true)
            setPage(1)
        }
    }

    const handleFilterCreate = (e) => {
        e.preventDefault();
        if (e.target.value.length) {
            dispatch(filterByCreated(e.target.value))
            setFilter(true)
            setPage(1)
        }
    }

    const handleRefresh = (e) => {
        e.preventDefault();
        setFilter(false);
        setPage(1);
    }

    return (
        <div>
            <select onChange={(e) => handleFilterGenre(e)}>
                <option value="">Filtrar por genero</option>
                {
                    genres.length ? genres.map(genre => {
                        return (
                            <option value={genre.name} key={genre.id}>{genre.name}</option>
                        )
                    }) : <option></option>
                }
            </select>
            <select onChange={(e) => handleFilterCreate(e)}>
                <option value="">Filtrar por existente/creado</option>
                <option value="exist">Existente</option>
                <option value="create">Creado</option>
            </select>
            <button onClick={(e) => handleRefresh(e)}>Refresh</button>
        </div>
    );
};

export default Filters;