import React from 'react'
import PropTypes from 'prop-types'
import pets from "../data/pets.json"
import Adoption from "./Adoption.jsx"
import styles from "./AdoptionPage.module.css"

const AdoptionPage = (props) => {
    console.log(props)
    var petArray = new Array();
    for( let i in pets){
        if(pets[i].adoption == props.adoption){
            petArray.push(pets[i]);
        }
    }
    return(
        <div>
            <ul className={styles.p}>
            {petArray.map(pet => (
                <li className={styles.li} key={pet.name}><Adoption pet = {pet}/></li>

            ))}
            </ul>

        </div>
    
    );

    
};

AdoptionPage.propTypes = {
    pet: PropTypes.array.isRequired
};

export default AdoptionPage