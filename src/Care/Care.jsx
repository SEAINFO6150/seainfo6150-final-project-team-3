import React from 'react';
import CareList from './CareList.jsx';
import styles from "./styles/CareList.module.css";

const Care = () => {
    return (
        <ul className={styles.container}>
            <li className={styles.content}>
                <CareList />
            </li>
        </ul>
    )
}

export default Care
