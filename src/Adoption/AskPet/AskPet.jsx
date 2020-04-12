import React from "react";
import AskPetForm from './AskPetForm.jsx';
import styles from './AskPet.module.css';

const AskPet =(props) => {
    return (
        <div>
            <header className = {styles.header}>
                Ask about your Pet
            </header><br/>
            <form>
                <AskPetForm/>
            </form><br/>
        </div>


    )
}

export default AskPet;
