import React from 'react'
import PropTypes from 'prop-types'
import styles from './Adoption.module.css'

const Adoption = props => {
    return (
        <div className = {styles.container}>
            <a href={"/detail/" +props.pet.id}>
                <img className={styles.img} src={props.pet.img.url}/>
                <div className = {styles.petName}>{props.pet.name}</div>
            </a>
            <p className={styles.summary}>{props.pet.summary}</p>
        </div>
    );
}
Adoption.propTypes = {
    pet: PropTypes.object.isRequired
};
export default Adoption