import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <Link to="/Home">
                <button>Ingresar</button>
            </Link>
        </div>
    );
};

export default LandingPage;