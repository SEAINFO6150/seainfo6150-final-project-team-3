import React from 'react';
import styles from './ArticleCat1.module.css';

const ArticleCatCare1 = () => {
    return(
        <div className={styles.container}>
            <div>
                <ul> 
                    <li>
                        <header>Basic Care</header>
                    </li>
                    <div><img className={styles.img} src='../images/cat1.jpg'/></div>
                    <li>Have you recently added a feline friend to your family? Congratulations! We know you’ll be thrilled to have your new cat in your home. If you are considering adopting a cat, please visit your local shelter. We encourage you to browse our directory of adoptable cats in your area, or use our shelter finder to start your search.</li>
                    <li>We recommend purchasing high-quality, brand-name kitten or cat food. Your veterinarian will be able to assess your new cat or kitten and determine the best diet. Factors such as age, activity level and health make a difference in what and how much a cat should eat.</li>
                    <li>
                    Your pet should have her own clean, dry place in your home to sleep and rest. Line your cat's bed with a soft, warm blanket or towel. Be sure to wash the bedding often. Please keep your cat indoors. Outdoor cats do not live as long as indoor cats. Outdoor cats are at risk of trauma from cars, or from fights with other cats, raccoons and free-roaming dogs. Coyotes are known to eat cats. Outdoor cats are more likely to become infested with fleas or ticks, as well as contract infectious diseases.                    </li>
                    <li>
                    If allowed outdoors, your cat must wear a safety collar and an ID tag. A safety collar with an elastic panel will allow your cat to break loose if the collar gets caught on something. And for both indoor and outdoor cats, an ID tag or an implanted microchip can help ensure that your cat is returned if he or she becomes lost.                    </li>
                    <li>All indoor cats need a litter box, which should be placed in a quiet, accessible location. In a multi-level home, one box per floor is recommended. Avoid moving the box unless absolutely necessary, but if you must do so, move the box just a few inches per day. Keep in mind that cats won't use a messy, smelly litter box, so scoop solid wastes out of the box at least once a day. Dump everything, wash with a mild detergent and refill at least once a week; you can do this less frequently if using clumping litter. Don't use ammonia, deodorants or scents, especially lemon, when cleaning the litter box. If your cat will not use a litterbox, please consult with your veterinarian. Sometimes refusal to use a litter box is based on a medical condition that required treatment.         </li>            
                    <li>Cats need to scratch! When a cat scratches, the old outer nail sheath is pulled off and the sharp, smooth claws underneath are exposed. Cutting your cat’s nails every two to three weeks will keep them relatively blunt and less likely to harm the arms of both humans and furniture. Provide your cat with a sturdy scratching post, at least three feet high. The post should also be stable enough that it won't wobble during use, and should be covered with rough material such as sisal, burlap or tree bark. Many cats also like scratching pads.</li>
                </ul>
            </div>
        </div>
    )
}

export default ArticleCatCare1