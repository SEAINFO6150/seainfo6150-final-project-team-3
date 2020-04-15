import React from 'react'
import PropTypes from 'prop-types'
import styles from './PetDetail.module.css'


const PetDetail = props => {

    return (
        <section>
        <div className={styles.box}>
            <header className = {styles.header}>{props.pet.name}</header>
            <source srcset={props.pet.img.url}/>
            <a href={"/askPet/"+ props.pet.name}><img className = {styles.image} src={props.pet.img.url} alt={props.pet.name}/></a>
            <div className = {styles.summary}>
                <p>* {props.pet.gender}&nbsp; &nbsp;&nbsp; * {props.pet.age} &nbsp; &nbsp;&nbsp;* {props.pet.position}</p>
                <a className = {styles.link} href={"/askPet/"+ props.pet.name}>
                    <div className = {styles.click}>Meet {props.pet.name} (click here to adopt {props.pet.name} )</div>
                </a>
            </div>
            
        </div>
            <div className = {styles.content}>
                <p>{props.pet.information}</p> 
            </div>
        </section>
    );
}
PetDetail.propTypes = {
    pet: PropTypes.object.isRequired
  };
export default PetDetail
