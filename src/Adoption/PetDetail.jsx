import React from 'react'
import PropTypes from 'prop-types'
import styles from './PetDetail.module.css'

const PetDetail = props => {

    return (
    <section>
        <div className={styles.box}>
            <picture>
                <source srcset={props.pet.img.url}/>
                <a href="/askPet"><img className = {styles.image} src={props.pet.img.url} alt={props.pet.name}/></a>
            </picture>

            <div className = {styles.summary}>
                <h1 className = {styles.h1}>{props.pet.name}</h1>
                
                <h2 className = {styles.h2}>Gender </h2>{props.pet.gender}
                
                <h2 className = {styles.h2}>Age</h2>{props.pet.age}
                
                <h2 className = {styles.h2}>Position</h2>{props.pet.position}
                <a href="/askPet">
                    <h2 className = {styles.link}>Ask about this Pet</h2>
                </a>

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
