import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

const Card = ({ id, img, name, genres, created }) => {

    const generos = created ? genres.map(g => g.name) : genres

    return (
        <div className={styles.card}>
          <Link to={`/Home/${id}`}>
            <img src={img} className={styles.image} alt="image" />
          </Link>
          <h4>{name}</h4>
          <p>{generos.join(" - ")}</p>
        </div>
    );
};

export default Card;