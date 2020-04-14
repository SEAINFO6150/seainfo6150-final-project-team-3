import React from 'react';
import styles from '../styles/Article.module.css';

const ArticleDogCare3 = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li>
                    <header>Dog Nutrition Tips</header>
                </li>
                <div><img className={styles.img} src='../images/dog3.jpg'/></div>
                <li>
                A balanced diet is critically important to your dog’s cell maintenance and growth and overall health. Barring any special needs, illness-related deficiencies, or instructions from your vet, your pet should be able to get all the nutrients he or she needs from high-quality commercial pet foods, which are specially formulated with these standards in mind. </li>
                <li>
                But dogs of different ages have different nutritional requirements. So, how much—or how little—should you be feeding your four-legged friend? Read on to learn what your pet’s body needs at the various stages of life.  </li>
                <li>
                Nutrients are substances obtained from food and used by an animal as a source of energy and as part of the metabolic machinery necessary for maintenance and growth. There are the six essential classes of nutrients dogs need for optimum healthy living.</li>
                <li>
                If you’re responsible caring for puppies in the first few months of their lives, you’ll need to be prepared to move them from a diet of mom’s milk to regular puppy food. This process of gradually reducing a puppy’s dependency on his mother’s milk, known as weaning, should generally begin between three and four weeks of age and is ideally completely by the time the puppy is seven to eight weeks. </li>                   
                <li>Adult dogs require sufficient nutrients to meet energy needs and to maintain and repair body tissues. The amount you feed your adult dog should be based on his or her size and energy output. Activity levels may vary dramatically between pets, and will play an important role in determining caloric intake.</li>
                <li>Dogs begin to show visible age-related changes at about seven to 12 years of age. There are metabolic, immunologic and body composition changes, too. Some of these may be unavoidable while others can be managed with diet. When feeding your older dog, the main objective should be to maintain health and optimum body weight, slow development of chronic disease and minimize diseases that may already be present.</li>
                <li>One of the most common pitfalls dog parents should watch out for is overfeeding. Attempts to shower our dogs with love by means of big meals and lots of tasty treats are sweet, but misguided. In dogs, as with humans, extra weight can lead to health problems. Be sure to indulge your four-legged friend with affection, not food!</li>
            </ul>
        </div>
    )
}

export default ArticleDogCare3