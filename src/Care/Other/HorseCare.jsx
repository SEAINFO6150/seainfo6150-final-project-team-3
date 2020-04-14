import React from 'react';
import styles from './other.module.css';

const HorseCare = () => {
    return(
        <div className={styles.container}>
            <div>
                <ul> 
                    <li>
                        <header>Horse Care</header>
                    </li>
                    <div><img className={styles.img} src='../images/horse.jpg'/></div>
                    <li>Are you bringing an equine friend into your family, or looking to brush up on your horse care skills? Read on for tips to keep your horse healthy and happy.
                    </li>
                    <li>
                        <strong>Nutritional Needs</strong>
                    </li>
                    <li>A horse’s digestive system is made to process large quantities of grass, which is high in fiber and water. The basic diet for most horses should be grass and good quality hay, free of dust and mold. In most cases, plenty of fresh, clean, unfrozen water should be available at all times, even if the horse only drinks once or twice a day.
                    </li>
                    <li>
                        <strong>Vaccinations and Deworming</strong>
                    </li>
                    <li>All horses need vaccinations and most need regular deworming. The specifics should be discussed with an equine veterinarian. Every horse should be protected against tetanus. Other vaccines are routinely given for Eastern and Western equine encephalomyelitis, equine influenza, rhinopneumonitis (equine herpes) and rabies. Vaccines for West Nile Virus are also available. Ask your veterinarian if other vaccines are appropriate for your horse.</li>
                    <li>
                        <strong>Housing, Rest and Exercise</strong>
                    </li>    
                    <li>Contrary to common thought, straight stalls are not necessarily worse than box stalls if the horses are together, and spend most of their day outside. Horses isolated in box stalls can develop behavioral problems from lack of companionship, exercise and mental stimulation. Whenever possible, horses should be outside with other horses every day.</li>
                    <li>
                        <strong>Extreme Weather Precautions</strong>
                    </li>  
                    <li>Unless it is very wet and windy, horses tolerate cold much better than heat and humidity. If they can’t sweat, they can’t get rid of heat buildup in their bodies. If the sum of the temperature in degrees Fahrenheit and the relative humidity in percentage is over 130, you should be cautious about exercising your horse. If it is over 150, you should probably rest in the shade, and if it is over 180, most horses should not work at all.</li>
                    <li>
                        <strong>Teeth</strong>
                    </li>
                    <li>Horses’ teeth grow continuously. Uneven wear can lead to sharp points and edges that cause pain and difficulty chewing. A horse’s teeth should be checked once or twice a year and “floated” (to make them smoother) by a veterinarian or well-trained equine dentist as needed. Dental problems, from painful points to rotting teeth, may cause difficulty chewing or “quidding,” which occurs when food falls out of the mouth. Other signs of dental disease may include foul breath, undigested hay in the stools or discomfort from the bit or noseband. Dental disease can lead to choke, colic and weight loss.</li>
                </ul>
            </div>
        </div>
    )
}

export default HorseCare