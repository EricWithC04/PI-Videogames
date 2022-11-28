import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import { getGenres, getPlatforms, createGame } from '../../redux/actions';
import styles from "./CreateGameForm.module.css";

const CreateGameForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

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
            if (!gameGenres.includes(e.target.value)) {
                setGameGenres([
                    ...gameGenres,
                    e.target.value
                ])
            }
        }
    }

    const handleSelectPlatforms = (e) => {
        if (e.target.value.length) {
            if (!gamePlatforms.includes(e.target.value)) {
                setGamePlatforms([
                    ...gamePlatforms,
                    e.target.value
                ])
            }
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
        setErrors(validate(input))
        if (
            !input.name.length &&
            !input.img.length &&
            !input.description.length &&
            !input.release.length &&
            !input.rating &&
            !gameGenres.length
        ) {
            alert("Por favor, completa los campos requeridos")
        } else {
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
            history.push("/Home")
        }
    }}

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formContainer}>
            <label className={styles.txt}>Nombre</label>
            <input 
                name='name' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.name}
                placeholder="nombre del juego..."
                className={styles.input}
            />
            {errors.hasOwnProperty("name") ? (<p className={styles.errors}>{errors.name}</p>) : null}
            <label className={styles.txt}>Imagen</label>
            <input 
                name='img' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.img}
                placeholder="https://imagen..."
                className={styles.input}
            />
            {errors.hasOwnProperty("img") ? (<p className={styles.errors}>{errors.img}</p>) : null}
            <label className={styles.txt}>Descripción</label>
            <input 
                name='description' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.description}
                placeholder="descripción..."
                className={styles.input}
            />
            {errors.hasOwnProperty("description") ? (<p className={styles.errors}>{errors.description}</p>) : null}
            <label className={styles.txt}>Fecha de Lanzamiento</label>
            <input 
                name='release' 
                onChange={(e) => handleChange(e)} 
                type="text" 
                value={input.release}
                placeholder="dd/mm/year"
                className={styles.input}
            />
            {errors.hasOwnProperty("release") ? (<p className={styles.errors}>{errors.release}</p>) : null}
            <label className={styles.txt}>Rating</label>
            <input 
                name='rating' 
                onChange={(e) => handleChange(e)} 
                type="number" 
                value={input.rating}
                className={styles.input}
            />
            {errors.hasOwnProperty("rating") ? (<p className={styles.errors}>{errors.rating}</p>) : null}
            <div>
                <select onChange={(e) => handleSelectGenres(e)} className={styles.genres}>
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
                                <div className={styles.selecteds}>
                                    <p>{genre}</p>
                                    <button onClick={(e) => handleDeleteGenre(genre)}>X</button>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
            {errors.hasOwnProperty("genres") ? (<p className={styles.errors}>{errors.genres}</p>) : null}
            <div>
                <select onChange={(e) => handleSelectPlatforms(e)} className={styles.platforms}>
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
                                <div className={styles.selecteds}>
                                    <p>{platform}</p>
                                    <button onClick={(e) => handleDeletePlatform(platform)} className={styles.delete}>X</button>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
            {errors.hasOwnProperty("platforms") ? (<p className={styles.errors}>{errors.platforms}</p>) : null}
            <button type="submit" className={styles.submit}>Crear Videojuego</button>
        </form>
    );
};

export default CreateGameForm;