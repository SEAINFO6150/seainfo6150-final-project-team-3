import React from 'react'
import PropTypes from 'prop-types'
import styles from './PetDetail.module.css'

const PetDetail = props => {

    return <div className = {styles.page}>
        <div className = {styles.petBody}>
            <div className = {styles.parContent}>
                <h1 className = {styles.h1Title}>{props.pet.name}</h1>
                <div>
                    <picture className = {styles.image}>
                        <source media="(min-width: 500px)" srcset={props.pet.img.url}/>
                        <img  className = {styles.image} src={props.pet.img.url} alt={props.pet.name}/>
                    </picture>
                </div>
                <div className = {styles.brief}>
                    <div>
                        <h2 className = {styles.h2Title}>About</h2>
                        <p>{props.pet.summary}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Gender</h3>
                        <p>{props.pet.gender}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Age</h3>
                        <p>{props.pet.age}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Position</h3>
                        <p>{props.pet.position}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3Title}>Information</h3>
                        <p>{props.pet.information}</p>
                    </div>
                </div>
            </div>
           
          
        </div>
    </div>
}
PetDetail.propTypes = {
    pet: PropTypes.object.isRequired
  };
export default PetDetail
