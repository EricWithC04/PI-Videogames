import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms, createGame } from '../../redux/actions';

const CreateGameForm = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    const allGenres = useSelector(state => state.allGenres)
    const allPlatforms = useSelector(state => state.allPlatforms)

    const regEx = {
        img: /^(ftp|http|https):\/\/[^ "]+$/,
        date: /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(1[0-9][0-9][0-9]|2[0-9][0-9][0-9])$/
    }
    const [ errors, setErrors] = useState({})
    const [ gameGenres, setGameGenres ] = useState([])
    const [ gamePlatforms, setGamePlatforms ] = useState([])
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
        else if (!regEx.img.test(input.img)) errors.img = "Añade una URL valida"
        else if (!input.description) errors.description = "Debes añadir una descripción"
        else if (!input.release) errors.release = "Debes añadir una fecha de publicación"
        else if (!regEx.date.test(input.release)) errors.release = "Debes añadir una fecha valida"
        else if (!input.rating) errors.rating = "Debes añadir el rating"
        else if (input.rating < 1) errors.rating = "El rating debe ser mayor a 1"
        else if (input.rating > 5) errors.rating = "El rating debe ser menor a 5"
        else if (!gameGenres.length) errors.genres = "Debes añadir al menos un genero"
        else if (!gamePlatforms.length) errors.platforms = "Debes añadir al menos una plataforma"
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

    const handleSelectGenres = (e) => {
        if (e.target.value.length) {
            setGameGenres([
                ...gameGenres,
                e.target.value
            ])
        }
    }

    const handleSelectPlatforms = (e) => {
        if (e.target.value.length) {
            setGamePlatforms([
                ...gamePlatforms,
                e.target.value
            ])
        }
    }

    const handleDeleteGenre = (g) => {
        const deleteGenre = gameGenres.filter(genre => genre !== g)
        setGameGenres(deleteGenre)
    }

    const handleDeletePlatform = (p) => {
        const deletePlatform = gamePlatforms.filter(platform => platform !== p)
        setGamePlatforms(deletePlatform)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (                 //detecta si el estado "errors" tiene alguna propiedad y tira un mensaje
            errors.hasOwnProperty("name") ||
            errors.hasOwnProperty("img") ||
            errors.hasOwnProperty("desciption") ||
            errors.hasOwnProperty("release") ||
            errors.hasOwnProperty("rating") ||
            errors.hasOwnProperty("genres") ||
            errors.hasOwnProperty("platforms")
            ) {
            alert("Por favor, completa los campos requeridos!")
        } else {
            const newGame = {
                ...input, 
                genres: [...gameGenres],
                platforms: [...gamePlatforms]
            }
            dispatch(createGame(newGame))
            setInput({
                name: "",
                img: "",
                description: "",
                release: "",
                rating: 0,
                genres: [],
                platforms: []
            })
            setGameGenres([])
            setGamePlatforms([])
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Nombre</label>
            <input 
                name='name' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.name}
                placeholder="nombre del juego..."
            />
            {errors.hasOwnProperty("name") ? (<p>{errors.name}</p>) : null}
            <label>Imagen</label>
            <input 
                name='img' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.img}
                placeholder="https://imagen..."
            />
            {errors.hasOwnProperty("img") ? (<p>{errors.img}</p>) : null}
            <label>Descripción</label>
            <input 
                name='description' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.description}
                placeholder="descripción..."
            />
            {errors.hasOwnProperty("description") ? (<p>{errors.description}</p>) : null}
            <label>Fecha de Lanzamiento</label>
            <input 
                name='release' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.release}
                placeholder="dd/mm/year"
            />
            {errors.hasOwnProperty("release") ? (<p>{errors.release}</p>) : null}
            <label>Rating</label>
            <input 
                name='rating' 
                onChange={(e) => handleChange(e)} 
                type="number" 
                value={input.rating}
            />
            {errors.hasOwnProperty("rating") ? (<p>{errors.rating}</p>) : null}
            <div>
                <select onChange={(e) => handleSelectGenres(e)}>
                    <option value="">Elegir Genero</option>
                    {
                        allGenres.length ? allGenres.map(genre => {
                            return (
                                <option value={genre.name}>{genre.name}</option>
                            )
                        }) : <option value=""></option>
                    }
                </select>
                <div>
                    {
                        gameGenres.length ? gameGenres.map(genre => {
                            return (
                                <div>
                                    <p>{genre}</p>
                                    <button onClick={(e) => handleDeleteGenre(genre)}>X</button>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
            {errors.hasOwnProperty("genres") ? (<p>{errors.genres}</p>) : null}
            <div>
                <select onChange={(e) => handleSelectPlatforms(e)}>
                    <option value="">Elegir Plataformas</option>
                    {
                        allPlatforms.length ? allPlatforms.map(platform => {
                            return (
                                <option value={platform.name}>{platform.name}</option>
                            )
                        }) : <option value=""></option>
                    }
                </select>
                <div>
                    {
                        gamePlatforms.length ? gamePlatforms.map(platform => {
                            return (
                                <div>
                                    <p>{platform}</p>
                                    <button onClick={(e) => handleDeletePlatform(platform)}>X</button>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
            {errors.hasOwnProperty("platforms") ? (<p>{errors.platforms}</p>) : null}
            <button type="submit">Crear Videojuego</button>
        </form>
    );
};

export default CreateGameForm;