import React from 'react'
import PropTypes from 'prop-types'
import styles from './PetDetail.module.css'

const PetDetail = props => {

    return <div className = {styles.page}>
        <div className = {styles.petBody}>
            <div className = {styles.parContent}>
                <h1 className = {styles.h1}>{props.pet.name}</h1>
                <div>
                    <picture className = {styles.image}>
                        <source srcset={props.pet.img.url}/>
                        <img  className = {styles.image} src={props.pet.img.url} alt={props.pet.name}/>
                    </picture>
                </div>
                <div className = {styles.content}>
                    <div>
                        <h3 className = {styles.h3}>Gender <p>{props.pet.gender}</p></h3>
                        
                    </div>
                    <div>
                        <h3 className = {styles.h3}>Age</h3>
                        <p>{props.pet.age}</p>
                    </div>
                    <div>
                        <h3 className = {styles.h3}>Position</h3>
                        <p>{props.pet.position}</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className = {styles.content}>
                    <div>
                        <h3 className = {styles.h3}>Information</h3>
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
