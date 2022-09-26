import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName, orderByRating } from '../../redux/actions';
import styles from "./Orders.module.css";

const Orders = ({ setPage }) => {

    const dispatch = useDispatch();

    const handleOrderName = (e) => {
        e.preventDefault();
        if (e.target.value.length) {
            dispatch(orderByName(e.target.value));
            setPage(1);
        }
    }

    const handleOrderRating = (e) => {
        e.preventDefault();
        if (e.target.value.length) {
            dispatch(orderByRating(e.target.value));
            setPage(1);
        }
    }

    return (
        <div className={styles.orderContainer}>
            <select onChange={(e) => handleOrderName(e)} className={styles.names}>
                <option value="">Ordenar por nombre</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select>
            <select onChange={(e) => handleOrderRating(e)} className={styles.ratings}>
                <option value="">Ordenar por rating</option>
                <option value="ascendente">Menor a Mayor</option>
                <option value="descendente">Mayor a Menor</option>
            </select>
        </div>
    );
};

export default Orders;