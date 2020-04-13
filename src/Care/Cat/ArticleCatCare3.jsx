import React from 'react';
import styles from './ArticleCat1.module.css';

const ArticleCatCare3 = () => {
    return(
        <div className={styles.container}>
            <div>
                <ul> 
                    <li>
                        <header>Cat Nutrition Tips</header>
                    </li>
                    <div><img className={styles.img} src='../images/cat3.jpg'/></div>
                    <li>
                    Looking for more information about how to structure your kitten, adult cat or senior cat’s diet? Read on for important nutrition tips to help keep your feline friend healthy.                    </li>
                    <li>
                        <strong>Nutrients Your Cat Needs</strong>
                    </li>
                    <li>Nutrients are substances obtained from food and used by an animal as a source of energy and as part of the metabolic machinery necessary for maintenance and growth. Barring any special needs, illness-related deficiencies or instructions from your vet, your pets should be able to get all the nutrients they need from high-quality commercial pet foods, which are formulated with these special standards in mind. Here are the six essential classes of nutrients fundamental for healthy living.</li>
                    <li>
                        <strong>Kittens</strong>
                    </li>
                    <li>If you’re responsible for taking care of kittens in the first few months of their lives, you should be prepared to move them from a diet of milk to regular kitten food. Read on for tips for making the transition.</li>
                    <li>Weaning is the process of transitioning kittens from mother’s milk to solid food. During weaning, kittens gradually progress from dependence on a mother’s care to social independence. Ideally, weaning is handled entirely by the mother cat. However, if the kitten in your care has been separated from his mother or if you are fostering a litter or a pregnant cat about to give birth, seeing the young ones through a successful weaning process may be up to you.</li>
                    <li>
                        <strong>Adult Cats</strong>
                    </li>
                    <li>Adult cats should eat enough of a high-quality, nutritious food to meet their energy needs and to maintain and repair body tissues. The amount you feed your adult cat should be based on his or her size and energy output. Activity levels vary dramatically between pets and will play an important role in determining caloric intake.</li>
                </ul>
            </div>
        </div>
    )
}

export default ArticleCatCare3