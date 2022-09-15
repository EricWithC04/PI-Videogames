import React from 'react';

const Paginated = ({ setPage, allGames, gamesPerPage }) => {

    const numberPages = Math.ceil(allGames / gamesPerPage);
    const numbers = [];
    for (let i = 0; i < numberPages; i++) {
        numbers.push(i + 1)
    }

    return (
        <nav>
            <ul>
                {
                    numbers.length ? numbers.map(number => {
                        return (
                            <li>
                                <a onClick={() => setPage(number)}>
                                    {number}
                                </a>
                            </li>
                        )
                    }) : <div></div>
                }
            </ul>
        </nav>
    );
};

export default Paginated;