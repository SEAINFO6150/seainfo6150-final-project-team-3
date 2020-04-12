import React from 'react'
import PropTypes from 'prop-types'
import styles from './AdoptionList.module.css'

const AdoptionList = () => {
    return (
        <div className = {styles.box}>
            <div className={styles.option}>
                <header className={styles.title}>Find a dog</header>
                <a href ="/adoption/Dog"><img className = {styles.image} src="/images/DogMain.jpg" href></img></a>
            </div>
            <div className={styles.option}>
                <header className={styles.title}>Find a Cat</header>
                <a href ="/adoption/Cat"><img className = {styles.image} src="/images/CatMain.jpg" href></img></a>
            </div>
            <div className={styles.option}>
                <header className={styles.title}>Find other pets</header>
                <a href ="/adoption/Others"><img className = {styles.image} src="/images/other.jpg" href></img></a>
            </div>
            <div className={styles.option}>
                <header className={styles.title}>Adoption Records</header>
                <a href ="/adoption/Records"><img className = {styles.image} src="/images/records.jpg" href></img></a>
            </div>
        </div>
    );
};

AdoptionList.propTypes = {
    pet: PropTypes.array.isRequired
};

export default AdoptionList