import React from "react";
import AskPetForm from './AskPetForm.jsx';
import styles from './AskPet.module.css';
import PropTypes from 'prop-types'
import PetDetail from "../PetDetail";


const AskPet = props => {
    return (
        <div>
            <header className = {styles.header}>
                Ask about {props.name}
            </header><br/>
            <form>
                <AskPetForm/>
            </form><br/>
        </div>
    )
}

PetDetail.propTypes = {
    name: PropTypes.object.isRequired
};

export default AskPet;
