import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

const Card = ({ id, img, name, genres }) => {
    return (
        <div className={styles.card}>
          <Link to={`/Home/${id}`}>
            <img src={img} className={styles.image} alt="image" />
          </Link>
          <h4>{name}</h4>
          <p>{genres.join(" - ")}</p>
        </div>
    );
};

export default Card;