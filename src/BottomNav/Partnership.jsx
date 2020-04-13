import React from 'react';
import styles from './BottomPage.module.css';
import {Link} from "react-router-dom";

const Partnership = () =>{
    return(
        <ul className={styles.container}>
            <li><header>Partnerships with us</header></li>
            <li>
                We work with a wide range of partners to provide benefits that help enhance and enrich the lives of pets, pet parents, and our shelter member network.
            </li>
            <li>
                For additional information on partnership opportunities, please <Link className={styles.link} to='/ContactUS'>Contact Us.</Link>
            </li>
            <li>
                If you need assistance with any other items please visit our <Link className={styles.link} to='/FAQs'> FAQs page.</Link>
            </li>
        </ul>
    )
}

export default Partnership;