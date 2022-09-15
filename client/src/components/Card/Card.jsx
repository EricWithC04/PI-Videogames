import React from 'react';

const Card = ({ img, name, genres }) => {
    return (
        <div>
          <img src={img} alt="image" />
          <h4>{name}</h4>
          <p>{genres.join(" - ")}</p>
        </div>
    );
};

export default Card;