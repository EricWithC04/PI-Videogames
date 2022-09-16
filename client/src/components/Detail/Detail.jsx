import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGameDetail } from '../../redux/actions';

const Detail = () => {

    const dispatch = useDispatch();
    const { idGame } = useParams();

    useEffect(() => {
        dispatch(getGameDetail(idGame))
    }, [dispatch])

    const detail = useSelector(state => state.gameDetail)
    console.log(detail);

    /* if (detail.hasOwnProperty("genres")) {
        return (
            
        )
    } else {
        return (
            <div>Cargando detalles...</div>
        )
    } */

    return (
        <div>
            {
                detail.hasOwnProperty("genres") ? (
                    <div>
                        <h1>{detail.name}</h1>
                        <img src={detail.img} alt="image" />
                        <p>{detail.genres.join(" - ")}</p>
                        <p>{detail.description}</p>
                        <p>{detail.release}</p>
                        <p>{detail.rating}</p>
                        <p>{detail.platforms.join(" - ")}</p>
                    </div>
                ) : ( <div>Cargando detalles...</div> )
            }
        </div>
    )
};

export default Detail;