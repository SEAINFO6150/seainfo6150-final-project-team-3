import React from 'react';
import styles from './other.module.css';

const RabbitCare = () => {
    return(
        <div className={styles.container}>
            <div>
                <ul> 
                    <li>
                        <header>5 Tips for Saving Money on Rabbit Care</header>
                    </li>
                    <div><img className={styles.img} src='../images/rabbit.jpg'/></div>
                    <li>Most rabbit-parents know that rabbits are not cheap pets — their medical care as exotic animals can add up, and they seem to love chewing on your most expensive items (clothes, furniture, equipment, etc.). However, there are several easy ways to reduce the costs of their daily care and manage your rabbit expenses more effectively. Here are just a few:
                    </li>
                    <li>
                        <strong>Hay: Buy in bulk from the farm</strong>
                    </li>
                    <li>Buying small bags of hay from pet stores can get expensive fast! Buying hay directly from a farmer can cut costs way down. Ordering hay in 50-lb. boxes online from farms is already a bargain compared to the small bags from pet stores, but taking a trip to a local farmer to buy a bale is really the way to go. A bale of Timothy hay, which can last several months, typically costs about $10.</li>
                    <li>
                        <strong>Vegetables: Ask your grocery store for veggie scraps</strong>
                    </li>
                    <li>Ask staffers at your local grocery store to collect their vegetable scraps for you. Grocery stores throw away tons of perfectly good veggies, including carrot, beet, and radish tops, or the outer layers of lettuces, cabbages, and other greens. Farmers’ markets are also a fantastic source for free vegetables. Be sure to never use vegetables that look wilted or old and wash everything extra carefully. Another idea is to try growing your own mint (which grows like a weed), parsley or other herbs in your garden. Be sure to check which plants are toxic to rabbits before feeding anything new.</li>
                    <li>
                        <strong>The litter box: Get creative</strong>
                    </li>
                    <li>A litter box is really just a plastic box, so why pay extra for a fancy cat litter pan from a pet store when you can grab a shallow plastic box from Walmart for half the price?</li>
                    <li>
                        <strong>Toys: Try DIY</strong>
                    </li>
                    <li>There are a lot of expensive bunny toys available, but it seems more often than not, rabbits just love playing with old-fashioned toys that don’t cost a cent, such as cardboard boxes, toilet-paper rolls stuffed with hay, and homemade cardboard tunnels or castles. Baby toys (such as plastic keys on a ring) can be cheaper than similar products sold in pet stores. Just make sure the plastic is hard, and not the “teething” kind, which can be chewed and ingested by rabbits.
                    </li>
                    <li>You might have to pay more for high-quality Timothy-based pellets, but with all the money you’ve saved with the other tips listed here, it will be a fair tradeoff!</li>
                </ul>
            </div>
        </div>
    )
}

export default RabbitCare