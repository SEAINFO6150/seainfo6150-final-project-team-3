import React from 'react'
import pets from "../data/pets.json";
import PetDetail from "./PetDetail.jsx"

const PetDetailPage = (props) => {
    let petMap=new Map();
    for(let i in pets){
        petMap.set(pets[i].id,pets[i]);
    };
    return (
        <PetDetail pet={petMap.get(parseInt(props.id))}/>
    )
}

export default PetDetailPage
