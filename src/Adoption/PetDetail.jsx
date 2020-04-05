import React from 'react'
import PropTypes from 'prop-types'
import styles from './PetDetail.module.css'

const PetDetail = props => {

    return (
    <section>
        <div className={styles.box}>
            <div>
                <h1 className = {styles.h1}>{props.pet.name}</h1>
                <div>
                    <picture className = {styles.image}>
                        <source srcset={props.pet.img.url}/>
                        <img  className = {styles.image} src={props.pet.img.url} alt={props.pet.name}/>
                    </picture>
                </div>
            </div>

            <div className = {styles.summary}>
                
                <p><h2>Gender </h2>{props.pet.gender}</p>
                
                <p><h2>Age</h2>{props.pet.age}</p>
                
                <p><h2>Position</h2>{props.pet.position}</p>
            </div>
        </div>

        <div className = {styles.content}>
            <div>
                <h3 className = {styles.h2}>Information</h3>
                {props.pet.information}
            </div>
        </div>
           
    </section>
    );
}
PetDetail.propTypes = {
    pet: PropTypes.object.isRequired
  };
export default PetDetail
