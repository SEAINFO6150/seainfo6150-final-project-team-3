import React from 'react';
import styles from '../styles/Article.module.css';

const ArticleCatCare2 = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.ul}> 
                <li>
                    <header>Cat Grooming Tips</header>
                </li>
                <div><img className={styles.img} src='../images/cat2.jpeg'/></div>
                <li>
                A clean cat is a happy cat, and we're here to help! From nail trims to bathing, a little maintenance goes a long way. Read on to find out how to keep your kitty’s eyes, ears, teeth, skin and fur healthy and clean. Please note: There are some cats who do not tolerate being groomed. If your cat fights the grooming process, and there is some potential that injury could occur to your cat or yourself, please make an appointment with a professional groomer or a veterinarian to have your cat groomed.                    </li>
                <li>
                With her built-in grooming tools (tongue and teeth), your fastidious feline is well-equipped to tackle her own hair care needs. But if she is very dirty or gets into something sticky or smelly, you may need to give her a bath. Follow these steps to ensure minimal stress and maximum efficiency.
                </li>
                <li>
                Brushing your cat not only removes dirt, grease and dead hair from her coat, but it helps to remove skin flakes and stimulates blood circulation, improving the overall condition of her skin. One or two brushings per week will help kitty to keep her healthy glow—and you’ll find that regular sessions are especially beneficial when your cat ages and is no longer able to groom so meticulously on her own. </li>
                <li>
                The condition of your cat’s skin is an indication of her overall health. When a skin problem occurs, your cat may respond with excessive scratching, chewing and/or licking. A wide range of causes—from external parasites and allergies to seasonal changes and stress, or a combination of these—may be affecting your cat’s skin and should be investigated. Skin problems are one of the most common reasons pet parents seek veterinary care. </li>
                <li>
                Shedding is a cat’s natural process of losing dead hair. Indoor cats can shed all year-round. Regularly grooming your cat and vacuuming hair from your house should minimize the inconvenience of shedding. However, if you see bald patches in your cat’s fur or notice a significant loss of hair, the underlying cause may be a health-related problem and should be investigated by a veterinarian. </li>
                <li>Your cat’s ears may be able to pick up the sound of a bag of treats being opened across the house, but they could still use a little help staying clean. Monitoring your kitty’s ears once per week for wax, debris and infection will help those sensitive sonar detectors stay perky and alert to your every move.</li>
                <li>A good home eye exam just before grooming can clue you into any tearing, crust, cloudiness or inflammation that may indicate a health problem. Here are few simple tips to keep your kitty’s eyes bright and healthy.</li>
            </ul>
        </div>
    )
}

export default ArticleCatCare2