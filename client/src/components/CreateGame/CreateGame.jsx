import React from 'react';

const CreateGame = () => {
    return (
        <form>
            <label>Nombre</label>
            <input type="text" />
            <label>Descripción</label>
            <input type="text" />
            <label>Fecha de Lanzamiento</label>
            <input type="text" />
            <label>Rating</label>
            <input type="text" />
            <select>
                <option value="">Elegir Genero</option>
            </select>
            <input type="text" />
            <select>
                <option value="">Elegir Plataformas</option>
            </select>
            <input type="text" />
            <button type="submit">Crear Videojuego</button>
        </form>
    );
};

export default CreateGame;