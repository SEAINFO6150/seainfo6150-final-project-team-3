import React from 'react';
import styles from './BottomPage.module.css';
import {Link} from "react-router-dom";

const FAQs = () =>{
    return(
        <ul className={styles.container}>
            <li>
                <header>FAQs</header>
            </li>
            <li>
                Thank you for using our website! We’re here to help you every step of the way from “just looking” at over 250,000 adoptable pets, to bringing your pet home, to living a long and happy life with your new family member.
            </li>
            <li>
                <h4>How Long Will It Take to Hear Back From The Adoption Group?</h4>
                Our website is a community and, like all communities, each individual or organization is a little bit different. Ideally, when you visit an animal shelter someone will greet you when you walk through the door, escort you in to meet the pets and answer your questions. Sometimes though, the person at the desk is on a tough phone call, everyone in the reception office is tied up with two boxes of kittens that just arrived, and the volunteer in the dog kennels just started and has as many questions as you do. Likewise, some days you might send in an inquiry and get a response within a few minutes and other groups may take a few days or a week. Don’t be afraid to follow up with the shelter or rescue group.
            </li>
            <li>
                <h4>How Will I Know If I’ve Been Approved to Adopt a Pet?</h4>
                After submitting an adoption inquiry, the group with the pet you’re interested in will contact you. You can also <Link className={styles.link} to='/ContactUS'>contact us</Link> directly to follow up.
            </li>
            <li>
                <h4>Am I Applying to be a member?</h4>
                No. Once you’ve submitted an inquiry to an adoption group, the shelter or rescue group with the pet you’re interested in will be sent your information. It is then up to the shelter or rescue group to determine whether it’s a match.
            </li>
            <li>
                <h4>Does Contacting the Adoption Group Put The Pet on Hold?</h4>
                Submitting an adoption inquiry does not guarantee the pet you’ve applied for, nor does it place a pet “on hold”.  For more information regarding the status of your application, or the pet you’ve applied for, please contact the shelter or rescue group listing the pet directly.
            </li>
            <li>
                <h4>Will There Be An Adoption Fee?</h4>
                We don't dictate adoption group policy, including adoption requirements and fees. If you’re interested in a specific pet, please contact the adoption group that created the pet listing through the Pet Profile page or Member Home Page.
            </li>

            <li>
                <h4>Why Wasn’t I Selected to Adopt?</h4>
                Thank you for thinking adoption first! Each shelter and rescue group has its own adoption process. We do not dictate adoption procedures to our members, although we do encourage them to do everything possible to facilitate finding good homes for their adoptable pets. We hope you won’t let this one experience change your mind about providing a loving home to a pet in need. There are many animal shelters and rescue groups with many more adoptable pets waiting for their forever homes! Thank you for helping an adoptable pet and we wish you the best of luck in your search to find a new member of your family.
            </li>

            <li>
                <h4>For more Question, Please <Link className={styles.link} to='/ContactUS'>contact us</Link> directly.</h4>
            </li>
        </ul>
    )
}

export default FAQs;