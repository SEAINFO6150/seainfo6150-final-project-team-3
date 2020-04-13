

import React from "react";
import styles from "./News.module.css";
import NewsItem from "./NewsItem";
import Foo from "../Foo/Foo";
import { render } from "react-dom";
import Tabs from './Tabs';
require('./styles.css');





const News = props => {
  return (

    <div>

     <Tabs>
      <div label="NEWS">
        <ul className={styles.newsul}>
         <li>
            <NewsItem className={styles.newsImage}
                      url={"https://www.homewardpet.org/wp-content/uploads/2018/11/Untitled-design-43.png"}
                      title={"123"}
                      head = {"Holiday Pet Food Drive"}
                      para = {"This holiday season, join Homeward Pet for the 8th Annual Holiday Pet Food Drive to help homeless animals and families in need in our community. Through December 31st, drop off your generous dog or cat food donation at any of the participating locations below, or bring your donation to Homeward Pet Adoption Center in Woodinville any day between 9am – 6pm."}
                      time = {"Fri, 23 Mar 2020"}
                      newsName = {"News1"}
            />
            <NewsItem className={styles.newsImage}
                                  url={"https://www.homewardpet.org/wp-content/uploads/2018/11/Untitled-design-43.png"}
                                  title={"123"}
                                  head = {"Anniversary Month"}
                                  para = {"This holiday season, join Homeward Pet for the 8th Annual Holiday Pet Food Drive to help homeless animals and families in need in our community. Through December 31st, drop off your generous dog or cat food donation at any of the participating locations below, or bring your donation to Homeward Pet Adoption Center in Woodinville any day between 9am – 6pm."}
                                  time = {"Fri, 23 Mar 2020"}
                                  newsName = {"News2"}
                        />

            <NewsItem className={styles.newsImage}
                      url={"https://www.homewardpet.org/wp-content/uploads/2020/01/CelebratingFinal2.png"}
                      title={"123"}
                      head = {"Anniversary Month"}
                      para = {"Back when we were just a small shelter, 80s pop was still playing time after time on the radio. We can hardly believe we’re celebrating a full 30 years of making matches and saving lives! Since 1990, Homeward Pet has taken care of—and found homes for!—more than 30,000 homeless cats and dogs. Every year, as we help more animals find their forever homes, our anniversary celebration reaches farther into our community and helps us continue to do our lifesaving work."}
                      time = {"Fri, 18 Mar 2020"}
                      newsName = {"News3"}
            />
         </li>

          <li>
            <NewsItem className={styles.newsImage}
                      url={"https://www.homewardpet.org/wp-content/uploads/2020/01/KittenShowerFeatured.png"}
                      title={"123"}
                      head = {"It’s raining kittens at Homeward Pet!"}
                      para = {"Here at Homeward we’re getting ready for another busy kitten season! Come show your love for the littlest Homeward Pet residents at our annual Kitten Shower – Date and details for 2020 coming soon."}
                      time = {"Mon, 23 Feb 2020"}
                      newsName = {"Event1"}
             />



             <NewsItem className={styles.newsImage}
                       url={"https://www.homewardpet.org/wp-content/uploads/2015/10/Holiday-Giving-Tree-5.png"}
                       title={"123"}
                       head = {"Holiday Giving Tree"}
                       para = {"Homeward Pet’s Holiday Giving Tree is an opportunity for community members to help provide food and supplies for the care of the homeless dogs and cats that come through our doors."}
                       time = {"Tue, 2 Jan 2020"}
                       newsName = {"Event2"}
               />


             <NewsItem className={styles.newsImage}
                       url={"https://www.homewardpet.org/wp-content/uploads/2015/10/Holiday-Giving-Tree-5.png"}
                       title={"123"}
                       head = {"Holiday Giving Tree"}
                       para = {"Homeward Pet’s Holiday Giving Tree is an opportunity for community members to help provide food and supplies for the care of the homeless dogs and cats that come through our doors."}
                       time = {"Tue, 2 Jan 2020"}
                       newsName = {"Event3"}
               />

          </li>
       </ul>
      </div>

      <div label="EVENTS">
        <ul className={styles.newsul}>
         <li>
            <NewsItem className={styles.newsImage}
                      url={"https://www.homewardpet.org/wp-content/uploads/2018/11/Untitled-design-43.png"}
                      title={"123"}
                      head = {"Holiday Pet Food Drive"}
                      para = {"This holiday season, join Homeward Pet for the 8th Annual Holiday Pet Food Drive to help homeless animals and families in need in our community. Through December 31st, drop off your generous dog or cat food donation at any of the participating locations below, or bring your donation to Homeward Pet Adoption Center in Woodinville any day between 9am – 6pm."}
                      time = {"Fri, 23 Mar 2020"}
                      newsName = {"News1"}
            />
            <NewsItem className={styles.newsImage}
                                  url={"https://www.homewardpet.org/wp-content/uploads/2018/11/Untitled-design-43.png"}
                                  title={"123"}
                                  head = {"Anniversary Month"}
                                  para = {"This holiday season, join Homeward Pet for the 8th Annual Holiday Pet Food Drive to help homeless animals and families in need in our community. Through December 31st, drop off your generous dog or cat food donation at any of the participating locations below, or bring your donation to Homeward Pet Adoption Center in Woodinville any day between 9am – 6pm."}
                                  time = {"Fri, 23 Mar 2020"}
                                  newsName = {"News2"}
                        />

            <NewsItem className={styles.newsImage}
                      url={"https://www.homewardpet.org/wp-content/uploads/2020/01/CelebratingFinal2.png"}
                      title={"123"}
                      head = {"Anniversary Month"}
                      para = {"Back when we were just a small shelter, 80s pop was still playing time after time on the radio. We can hardly believe we’re celebrating a full 30 years of making matches and saving lives! Since 1990, Homeward Pet has taken care of—and found homes for!—more than 30,000 homeless cats and dogs. Every year, as we help more animals find their forever homes, our anniversary celebration reaches farther into our community and helps us continue to do our lifesaving work."}
                      time = {"Fri, 18 Mar 2020"}
                      newsName = {"News3"}
            />
         </li>

          <li>
            <NewsItem className={styles.newsImage}
                      url={"https://www.homewardpet.org/wp-content/uploads/2020/01/KittenShowerFeatured.png"}
                      title={"123"}
                      head = {"It’s raining kittens at Homeward Pet!"}
                      para = {"Here at Homeward we’re getting ready for another busy kitten season! Come show your love for the littlest Homeward Pet residents at our annual Kitten Shower – Date and details for 2020 coming soon."}
                      time = {"Mon, 23 Feb 2020"}
                      newsName = {"Event1"}
             />



             <NewsItem className={styles.newsImage}
                       url={"https://www.homewardpet.org/wp-content/uploads/2015/10/Holiday-Giving-Tree-5.png"}
                       title={"123"}
                       head = {"Holiday Giving Tree"}
                       para = {"Homeward Pet’s Holiday Giving Tree is an opportunity for community members to help provide food and supplies for the care of the homeless dogs and cats that come through our doors."}
                       time = {"Tue, 2 Jan 2020"}
                       newsName = {"Event2"}
               />


             <NewsItem className={styles.newsImage}
                       url={"https://www.homewardpet.org/wp-content/uploads/2015/10/Holiday-Giving-Tree-5.png"}
                       title={"123"}
                       head = {"Holiday Giving Tree"}
                       para = {"Homeward Pet’s Holiday Giving Tree is an opportunity for community members to help provide food and supplies for the care of the homeless dogs and cats that come through our doors."}
                       time = {"Tue, 2 Jan 2020"}
                       newsName = {"Event3"}
               />

          </li>
       </ul>
      </div>

    </Tabs>
    </div>

  );
};

export default News;