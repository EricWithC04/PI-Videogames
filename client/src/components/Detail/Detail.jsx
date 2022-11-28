import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearGame, getGameDetail } from '../../redux/actions';
import { Link } from 'react-router-dom';
import styles from "./Detail.module.css";
import NavBar from '../NavBar/NavBar';

const Detail = () => {

    const dispatch = useDispatch();
    const { idGame } = useParams();

    useEffect(() => {
        dispatch(getGameDetail(idGame))
        return dispatch(clearGame())
    }, [dispatch])

    const detail = useSelector(state => state.gameDetail)
    console.log(detail)

    return (
        <div className={styles.container}>
            <NavBar />
            {
                detail.hasOwnProperty("genres") ? (
                    <div className={styles.detailContainer}>
                        <div className={styles.game}>
                            <h1>{detail.name}</h1>
                            <img src={detail.img} className={styles.image} alt="image" />
                            <p>
                                {
                                    detail.hasOwnProperty("createDB") ?
                                    (detail.genres.map(g => g.name)).join(" - ") : 
                                    detail.genres.join(" - ")
                                }
                            </p>
                        </div>
                        <div className={styles.gameInfo}>
                            <h3>Descripción</h3>
                            <p>{detail.description}</p>
                            <p>Fecha de Lanzamiento: {detail.release}</p>
                            <p>Puntaje: {detail.rating}</p>
                            <h3>Plataformas</h3>
                            <p>{detail.createDB ? detail.platform : detail.platforms.join(" - ")}</p>
                        </div>
                    </div>
                ) : <div className={styles.loading}>Cargando detalles...</div> 
            }
        </div>
    )
};

export default Detail;