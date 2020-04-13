import React from 'react';
import {Link } from 'react-router-dom';
import styles from './BottomPage.module.css'

const ForDeveloper = () =>{
    return(
        <ul className={styles.container}>
            <li>
                <header>For Developer</header>
            </li>
            <li>
                This website is dedicated to helping pets find homes, and we know you are too. our offering free API is another way we extend your reach to get pets adopted.
            </li>
            <li>
                The API provides ready access to data for Petfinder's hundreds of thousands of adoptable pets and the organizations that care for them.
            </li>
            <li>
                <strong>Start Using the API</strong>
            </li>
            <li>
                Basic access is granted automatically after collecting a few details and will allow you to make up to 1,000 requests/day, with a rate limit of 50 requests/second. If you need more bandwidth, you can request more once you have your basic key.
            </li>
            <li>
                In order to get an API key, Please <Link className={styles.link} to='/ContactUS'>Contact Us.</Link>
            </li>
        </ul>
    )
}

export default ForDeveloper;