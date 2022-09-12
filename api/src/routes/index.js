const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getApiGames, searchApiGames } = require("../controllers/index.js")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const videogamesForName = await searchApiGames();
            videogamesForName.length ? 
            res.status(200).send(videogamesForName) :
            res.status(404).send("No se han encontrado coincidencias con su busqueda")
        } else if (!name) {
            const allVideogames = await getApiGames();
            allVideogames.length ?
            res.status(200).send(allVideogames) :
            res.status(404).send("No se han encontrado los videojuegos")
        }
    } catch (error) {
        console.error(error);
        res.status(404).send("Ha ocurrido un error en la petición!")
    }
})


module.exports = router;
