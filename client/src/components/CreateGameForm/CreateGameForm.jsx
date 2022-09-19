import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms } from '../../redux/actions';

const CreateGameForm = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    const allGenres = useSelector(state => state.allGenres)
    const allPlatforms = useSelector(state => state.allPlatforms)

    const [ errors, setErrors] = useState({})
    const [ input, setInput ] = useState({
        name: "",
        img: "",
        description: "",
        release: "",
        rating: 0,
        genres: [],
        platforms: []
    })

    const validate = (input) => {
        let errors = {};
        if (!input.name) errors.name = "El videojuego necesita un nombre!"
        else if (!input.img) errors.img = "Debes añadir una imagen del juego"
        else if (!input.description) errors.description = "Debes añadir una descripción"
        else if (!input.release) errors.release = "Debes añadir una fecha de publicación"
        else if (!input.rating) errors.rating = "Debes añadir el rating"
        else if (!input.genres.length) errors.genres = "Debes añadir al menos un genero"
        else if (!input.platforms.length) errors.platforms = "Debes añadir al menos una plataforma"
        return errors
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Nombre</label>
            <input name='name' onChange={(e) => handleChange(e)} type="text" value={input.name}/>
            <label>Imagen</label>
            <input name='img' onChange={(e) => handleChange(e)} type="text" value={input.img}/>
            <label>Descripción</label>
            <input name='description' onChange={(e) => handleChange(e)} type="text" value={input.description}/>
            <label>Fecha de Lanzamiento</label>
            <input name='release' onChange={(e) => handleChange(e)} type="text" value={input.release}/>
            <label>Rating</label>
            <input name='rating' onChange={(e) => handleChange(e)} type="number" value={input.rating}/>
            <select>
                <option value="">Elegir Genero</option>
                {
                    allGenres.length ? allGenres.map(genre => {
                        return (
                            <option value={genre.name}>{genre.name}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <input type="text" />
            <select>
                <option value="">Elegir Plataformas</option>
                {
                    allPlatforms.length ? allPlatforms.map(platform => {
                        return (
                            <option value={platform.name}>{platform.name}</option>
                        )
                    }) : <option value=""></option>
                }
            </select>
            <input type="text" />
            <button type="submit">Crear Videojuego</button>
        </form>
    );
};

export default CreateGameForm;