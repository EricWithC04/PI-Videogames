import React from 'react';
import styles from "./Card.module.css";

const Card = ({ img, name, genres }) => {
    return (
        <div className={styles.card}>
          <img src={img} className={styles.image} alt="image" />
          <h4>{name}</h4>
          <p>{genres.join(" - ")}</p>
        </div>
    );
};

export default Card;