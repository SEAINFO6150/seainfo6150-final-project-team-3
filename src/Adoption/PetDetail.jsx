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
                    <a href="/askPet">
                        <p><button className = {styles.button}>Ask about this Pet</button></p>
                        <br/>
                        <picture className = {styles.image}>
                            <source srcset={props.pet.img.url}/>
                            <img  className = {styles.image} src={props.pet.img.url} alt={props.pet.name}/>
                        </picture>
                    </a>
                </div>
            </div>

            <div className = {styles.summary}>
                
                <h2>Gender </h2>{props.pet.gender}
                
                <h2>Age</h2>{props.pet.age}
                
                <h2>Position</h2>{props.pet.position}

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
