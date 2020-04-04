import React from 'react'
import Form from "../Form/Form";
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={styles.container}>
            <header>Planing to Adopt a Pet?</header>
            <img className={styles.img} src="/images/ADOPTION-DOG.jpg" alt="ADOPTION-DOG" />
            <div className={styles.processDiv}>
                <header>
                The process to adopt a pet:
                </header>
                <ul>
                    <li>
                        <strong>1. Determine how much time you have to devote to your new pet every day. </strong>Cats are usually lower maintenance than dogs. And small animals like gerbils, guinea pigs, and hamsters can require even less work. But remember, even the littlest guys require daily care. If you can’t commit to providing fresh water, food, cleaning, and love every day, you might not be ready for a pet.
                    </li>
                    <li>
                        <strong>2. Figure out how much you can spend on your pet yearly without going over your budget. </strong>Dogs and cats are likely to be more expensive because they require yearly vet visits, vaccinations, heartworm and flea protection, and lots of food. A hamster eats less and doesn’t usually require vaccinations.
                    </li>
                    <li>
                        <strong>3. How long a commitment can you make to the pet? Cats can live to be upwards of 20 years old.</strong>  And if you’re adopting a puppy, be prepared to care for him for at least the next 15 years. Hamsters and guinea pigs live shorter lives. And rabbits are somewhere in between with lifespans of nine to 12 years. If you’re thinking about adopting a bird, do lots of research. While a parakeet lives to be between eight and 12 years old, a parrot can live to be 80!
                    </li>
                    <li>
                        <strong>4. How much time and energy do you have to spend on exercising your pet?</strong> If you prefer snuggling up on the couch watching movies all weekend, a couch potato dog might be a good fit. Even better, a cat or small animal like a gerbil won’t require any outdoor exercise. But remember, some cats have high energy levels, too! While you don’t need to take your cat for a run, you might need to spend at least thirty minutes a day playing.
                    </li>
                    <li>
                        <strong>5. Adopt!</strong> Most people know that buying a cat or dog from the pet store isn’t a good idea. But the small animal retail industry (like rabbits, hamsters, gerbils, and guinea pigs) is also cruel. Most shelters offer more animals than just cats and dogs. It’s simple to adopt hamsters, gerbils, rabbits, guinea pigs, birds, and even reptiles locally.
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Home
