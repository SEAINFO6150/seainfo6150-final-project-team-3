import React from 'react'
import PropTypes from 'prop-types'
import styles from './Adoption.module.css'

const Adoption = props => {
    return (
    <div className = {styles.adoption}>
        <a className = {styles.detail} href={"/detail/" +props.pet.id}>
            <img className = {styles.image} src={props.pet.img.url}/>
            <h1 className = {styles.petName}>{props.pet.name}</h1></a>
        <p className={styles.p}>{props.pet.summary}</p>
    </div>
    );
}
Adoption.propTypes = {
    pet: PropTypes.object.isRequired
};
export default Adoption