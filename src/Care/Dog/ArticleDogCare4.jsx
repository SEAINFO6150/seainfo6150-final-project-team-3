import React from 'react';
import styles from '../styles/Article.module.css';

const ArticleDogCare4 = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li>
                    <h1>Common Dog Diseases</h1>
                </li>
                <div><img className={styles.img} src='../images/dog4.jpg'/></div>
                <li>
                As a dog parent, it is important to recognize the signs and symptoms of common illnesses so you can seek veterinary help for your canine friend as soon as possible. Read on for information about diseases and other medical inflictions that frequently impact dogs. </li>
                <li><h3>Cancer</h3>
                </li>
                <li>Finding out that a loved one has cancer can be very scary and confusing. When that loved one is your dog, it’s important to keep in mind that different veterinarians might have different views on the best way to treat the disease. It’s always a good idea to seek out a second opinion, perhaps from a veterinary oncologist, and carefully review your options.</li>
                <li><h3>Diabetes</h3></li>
                <li>Diabetes in dogs is a complex disease caused by either a lack of the hormone insulin or an inadequate response to insulin. After a dog eats, his digestive system breaks food into various components, including glucose—which is carried into his cells by insulin, a hormone secreted by the pancreas. When a dog does not produce insulin or cannot utilize it normally, his blood sugar levels elevate. The result is hyperglycemia, which, if left untreated, can cause many complicated health problems for a dog.</li>
                <li><h3>Heartworm</h3></li>                    
                <li>Heartworm is a parasitic worm that lives in the heart and pulmonary arteries of an infected animal. The worms travel through the bloodstream—harming arteries and vital organs as they go—ultimately completing their journey to the vessels of the lung and the heart chamber about six months after the initial infection. Several hundred worms can live in one dog for five to seven years.</li>
                <li><h3>Kennel Cough</h3></li>
                <li>Kennel cough is a term loosely used to describe a complex of respiratory infections—both viral and bacterial—that causes inflammation of a dog’s voice box and windpipe. It’s a form of bronchitis and is similar to a chest cold in humans.</li>
                <li><h3>Rabies</h3></li>
                <li>Although the name suggests otherwise, ringworm isn’t caused by a worm at all—but a fungus that can infect the skin, hair and nails. This highly contagious disease can lead to patchy areas of hair loss on a dog and can spread to other animals—and to humans, too.</li>
            </ul>
        </div>
    )
}

export default ArticleDogCare4