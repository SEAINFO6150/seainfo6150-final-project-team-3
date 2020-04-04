import React from 'react'
import PropTypes from 'prop-types'
import styles from './AdoptionList.module.css'

const AdoptionList = () => {
    return (
        <div>
            <section className = {styles.box}>
            <div className={styles.option}>
                <a href ="/adoption/Dog"><p /><img className = {styles.image} src="/images/DogMain.jpg" href></img></a>
            </div>
            <div className={styles.option}>
                <a href ="/adoption/Cat"><img className = {styles.image} src="/images/CatMain.jpeg" href></img></a>
            </div>
            <div className={styles.option}>
                <a href ="/adoption/Others"><img className = {styles.image} src="/images/other.jpg" href></img></a>
            </div>
            <div className={styles.option}>
                <a href ="/adoption/Records"><img className = {styles.image} src="/images/records.jpg" href></img></a>
            </div>
            </section>
        
        </div>
    
        
    );
    
    
};

AdoptionList.propTypes = {
    pet: PropTypes.array.isRequired
};

export default AdoptionList