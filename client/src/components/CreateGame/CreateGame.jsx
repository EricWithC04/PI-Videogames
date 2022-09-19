import React from 'react';
import { Link } from 'react-router-dom';
import CreateGameForm from '../CreateGameForm/CreateGameForm';

const CreateGame = () => {
    return (
        <div>
            <Link to="/Home">
                <img src="https://assets.stickpng.com/images/585e4695cb11b227491c3373.png" alt="back" />
            </Link>
            <CreateGameForm></CreateGameForm>
        </div>
    );
};

export default CreateGame;