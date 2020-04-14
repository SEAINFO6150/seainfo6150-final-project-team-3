import React from 'react';
import styles from '../styles/Article.module.css';

const ArticleDogCare2 = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li>
                    <h1>Dog Grooming Tips</h1>
                </li>
                <div><img className={styles.img} src='../images/dog2.jpg'/></div>
                <li>
                The ASPCA recommends bathing your dog at least once every three months, but some may require more frequent baths if he or she spends a lot of time outdoors or has skin problems. Here are some steps to help you get started.                    </li>
                <li>
                Regular grooming with a brush or comb will help keep your pet's hair in good condition by removing dirt, spreading natural oils throughout her coat, preventing tangles and keeping her skin clean and irritant-free. Plus, grooming time is a great time to check for fleas and flea dirt—those little black specks that indicate your pet is playing host to a flea family.                    </li>
                <li>
                Although shedding old or damaged hair is a normal process for dogs, the amount and frequency of hair shed often depends upon their health, breed type and season. Many dogs develop thick coats in the winter that are then shed in the spring. Dogs who are always kept indoors, however, are prone to smaller fluctuations in coat thickness and tend to shed fairly evenly all year.                    </li>
                <li>
                Your dog’s skin is an indication of her overall health, so it’s important to keep it in prime shape. When a skin problem occurs, your dog may respond with excessive scratching, chewing and/or licking. A wide range of causes—including external parasites, infections, allergies, metabolic problems and stress, or a combination of these—may be to blame. </li>                   
                <li>Regularly brushing your dog's teeth, along with a healthy diet and plenty of chew toys, can go a long way toward keeping her mouth healthy. Bacteria and plaque-forming foods can cause build-up on a dog's teeth. This can harden into tartar, potentially causing gingivitis, receding gums and tooth loss. Many pooches show signs of gum disease by the time they're four years old because they aren't provided with proper mouth care.</li>
                <li>Giving your pup regular home eye exams will help keep you alert to any tearing, cloudiness or inflammation that may indicate a health problem. First, face your dog in a brightly lit area and look into his eyes. They should be clear and bright, and the area around the eyeball should be white. The pupils should be equal in size and there shouldn’t be tearing, discharge or any crust in the corners of his eyes. With your thumb, gently roll down your dog’s lower eyelid and look at the lining. It should be pink, not red or white.</li>
            </ul>
        </div>
    )
}

export default ArticleDogCare2