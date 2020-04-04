import React from 'react'
import PropTypes from 'prop-types'
import styles from './Adoption.module.css'

const Adoption = props => {
    return (
    
    <div>
        
        <section className = {styles.adoption}>
        
            <div>
                <img className = {styles.image} src={props.pet.img.url}/>
                <a className = {styles.detail} href={"/detail/" +props.pet.id}><h1 className = {styles.petName}>{props.pet.name}</h1></a>
            </div>
            <div className = {styles.summaryDiv}>
                
                <h2 className = {styles.title}>About</h2>
                <p className={styles.p}>{props.pet.summary}</p>
            </div>
            
            
        </section>

        
        
    </div>
    );
}
Adoption.propTypes = {
    pet: PropTypes.object.isRequired
};
export default Adoption