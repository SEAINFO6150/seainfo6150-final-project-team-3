import React from 'react';
import styles from './other.module.css';

const MouseCare = () => {
    return(
        <div className={styles.container}>
            <div>
                <ul> 
                    <li>
                        <header>Mouse Care</header>
                    </li>
                    <div><img className={styles.img} src='../images/mouse.jpg'/></div>
                    <li>A mouse measures in at about 3 1/2 inches, not including tail, and weighs just 1/2 to one ounce. While white (albino) mice are the most common type found in pet stores, fancy mice can be up to double the size, and come in a wide variety of coat colors and types, from curly and shiny to silver and cinnamon. If well cared for, mice typically live one three years.
                    </li>
                    <li>Mice are curious, charming pets, and will be active at various times throughout the day. However, they are fragile and should be treated gently, and children caring for them should always be supervised by an adult.
                    </li>
                    <li>
                        <strong>Housing</strong>
                    </li>
                    <li>Mice are very social with members of their own kind, and females will do especially well in a group. Males can be kept together if introduced at a young age—if introduced when adults, they will fight. If you plan to keep several males together, however, be certain that you’ve provided enough room. Do not house males and females together, since mice breed quickly—and often—with large litters.
                    </li>
                    <li>Don’t forget the furniture! Provide small boxes or flower pots to hide in, and cardboard tubes for your mice to chew and run through. You can also add a tree branch for them to climb on. Most mice will enjoy running on an exercise wheel, so be sure to get yours one. Make sure that the wheel has a solid surface without wire rungs, so their tails cannot get caught while running. Plastic habitats—the kind designed for hamsters—will also work for mice. However, since mice are smaller than hamsters, you may need to put small branches in the tubes so the mice can climb up and down. Keep in mind, however, that these cages can be more difficult to clean. The ASPCA does not recommend that you keep your mice in a wire cage made for hamsters. These models may have bars spaced too far apart to keep mice inside. If a person can stick their fingers through the bars, a young mouse could probably sneak out as well.</li>
                    <li>
                        <strong>Diet</strong>
                    </li>
                    <li>Mice will do well on a good commercial rodent chow, either in block or pellet form. You can find this food at pet supply stores and feed stores, just be sure the formula you select contains at least 16 percent protein and 18 percent fiber, but not more than 4 percent fat.</li>
                    <li>The ASPCA recommends offering small amounts of fresh fruit and vegetables to your mice every day as treats. Peas, broccoli, carrots, apples and bananas are good foods to start with, but you may need to experiment to find your pets’ favorites. Please don’t overdo it, though—mice have tiny tummies!</li>
                    <li>Fresh, clean water should be available at all times. A water bottle with a drinking tube that attaches to the side of the cage is the best way to go.</li>
                    <li>Do not give your mice cabbage, chocolate, corn, candy, junk food, peanuts, uncooked beans or onions.</li>
                </ul>
            </div>
        </div>
    )
}

export default MouseCare