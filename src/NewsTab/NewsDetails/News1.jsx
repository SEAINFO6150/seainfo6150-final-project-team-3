import React from "react";
import styles from "./NewsDetails.module.css";


const News1 = props => {
  return (
      <div className={styles.container}>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
             </li>
             <li>
                <h1>Anniversary Month</h1>
                <p>Back when we were just a small shelter, 80s pop was still playing time after time on the radio. We can hardly believe we’re celebrating a full 30 years of making matches and saving lives! Since 1990, Homeward Pet has taken care of—and found homes for!—more than 30,000 homeless cats and dogs. Every year, as we help more animals find their forever homes, our anniversary celebration reaches farther into our community and helps us continue to do our lifesaving work. There are a couple ways you can help as we look back on our last 30 years, and look forward to the next:

                   The 30th Anniversary Donation Drive. After 30 years of adoption, we’ve helped 33,500 animals find new homes. As we reflect on past success, we also look forward to the next 30 years and the thousands of animals who will need our help.

                   Support our $30,000 for 30 Years campaign to help provide essential care to animals in your community—in next year and beyond!

                   30th Anniversary Open House Celebration. Come celebrate with us! Move room-to-room in the shelter and get to know our lifesaving work. Listen to our amazing team as they take a look at how far we’ve come in developing our shelter practices, creating a comfortable environment for the animals, and creating a behavior program to help our furry friends find forever homes, and gaze into the future of these programs with us.

                   While on site you’ll have the opportunity to sit in on a dog training session, get hands on with our kittens, and sign up for our VIP Events list to get early access to tickets for our other events, including Kitten Yoga classes, our 30th Anniversary Luncheon, and much more!

                   Join us on Thursday, February 13, from 4 – 7 pm!</p>
             </li>
          </ul>
      </div>


  );
};

export default News1;