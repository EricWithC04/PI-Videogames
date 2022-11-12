const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllGames, 
        searchApiGames, 
        getGameDetail, 
        getAllGenres,
        getPlatforms } = require("../controllers/index.js")

const { Videogame, Genre, Platform } = require("../db.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const videogamesForName = await searchApiGames(name);
            videogamesForName.length ? 
            res.status(200).send(videogamesForName) :
            res.status(404).send("No se han encontrado coincidencias con su busqueda")
        } else if (!name) {
            const allVideogames = await getAllGames();
            allVideogames.length ?
            res.status(200).send(allVideogames) :
            res.status(404).send("No se han encontrado los videojuegos")
        }
    } catch (error) {
        console.error(error);
        res.status(404).send("Ha ocurrido un error en la petición!")
    }
})

router.get("/videogames/:idVideogame", async (req, res) => {
    try {
        const { idVideogame } = req.params;
        const allGames = await getAllGames();
        const filterGame = await allGames.filter(game => game.id === idVideogame);
        if (filterGame.length) {
            res.status(200).send(filterGame[0])
        } else {
            const game = await getGameDetail(idVideogame);
            game ?
            res.status(200).send(game) :
            res.status(404).send("Este ID no pertenece a ningún juego")
        }
    } catch(error) {
        console.error(error);
        res.status(404).send("Ha ocurrido un error durante la peticion")
    }
})

router.get("/genres", async (req, res) => {
    try {
        const allGenres = await getAllGenres();
        allGenres.length ? 
        res.status(200).send(allGenres) :
        res.status(404).send("No se han encontrado los generos!")
    } catch(error) {
        console.error(error);
        res.status(404).send("Ha ocurrido un error durante la peticion")
    }
})

router.get("/platforms", async (req, res) => {
    try {
        const allPlatforms = await getPlatforms();
        allPlatforms.length ?
        res.status(200).send(allPlatforms) :
        res.status(404).send("No se han encontrado las plataformas!")
    } catch (error) {
        console.error(error)
        res.status(404).send("Ha ocurrido un error en la peticion")
    }
})

router.post("/videogames", async (req, res) => {
    try {
        const { name, description, release, rating, img, genres, platforms } = req.body
        if ( !name || !description || !release || !rating ) {
            res.status(404).send("Por favor, complete los parametros obligatorios!")
        }

        let newGame = await Videogame.create({
            name, description, release, rating, img, platform: platforms.join("-")
        })

        if (genres.length) {
            let genreDB = await Genre.findAll({
                where: { name: genres }
            })
            newGame.addGenre(genreDB)
        }

        res.status(201).send("Videojuego creado con exito")
    } catch(error) {
        console.error(error);
        res.status(404).send("Ha ocurrido un error durante la peticion")
    }
})


module.exports = router;
