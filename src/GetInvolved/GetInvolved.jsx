import React from 'react';
import styles from './GetInvolved.module.css';
import {Link} from "react-router-dom";

const GetInvolved = () =>{
    return(
        <div className={styles.container}>
            <div><img className={styles.img} src='images/GetInvolved.jpg'/></div>
            <div>
                <ul>
                    <li>
                        <header>Get Involved</header>
                    </li>
                    <li>
                        <strong>Volunteer With Us</strong>
                    </li>
                    <li>
                        As a volunteer-powered non-profit organization, our group would not exist without the hard work and dedication of our volunteers. The number of dogs and cats we can save depends on the number of people we have helping us. We are always looking for new volunteers!
                    </li>
                    <li>
                        There are many ways you can volunteer with our group. From the early stages of preparing for our animal’s arrival, to meeting them at transport, to helping at adoption events, and then following up after adoption, every step along on our animal’s journey relies on volunteers.
                    </li>
                    <li>
                        For more Volunteer activity, please <Link className={styles.link} to='/ContactUS'>contact us</Link> directly.
                    </li>
                    <li>
                        <strong>Lucky pets depends on the generosity of our donors</strong>
                    </li>
                    <li>
                        We carefully guard every resource we have to maximize the number of animals we can save.  Even though our adoption fees do not cover all the costs associated with our rescues, we never want to turn away a dog or cat based on their medical needs, or be forced to end treatment due to cost alone. Instead, we fight tooth and nail to support our animals in every way that we can. We can only do this with your help!
                    </li>
                    <li>
                        We accepts donations online and by mail to our office at:
                    </li>
                    <li>
                        <em>
                        NEU Dog Animal Rescue<br/>
                        5159 Lee Highway<br/>
                        Arlington, VA 22207
                        </em>
                    </li>
                    <li>
                        We also accept in kind donations of supplies for our shelter partners. Please <Link className={styles.link} to='/ContactUS'>contact us</Link> to coordinate drop-off or pick-up.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GetInvolved;