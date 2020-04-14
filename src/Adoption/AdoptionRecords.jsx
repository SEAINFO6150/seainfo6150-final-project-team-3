import React from "react";
import styles from "./AdoptionRecords.module.css";


const Records = props => {
  return (
      <div className={styles.container}>
        <header>2019 STATISTICS</header>
        <div className = {styles.content}>
            <img className={styles.image} src= "/images/Records-dog.jpg"  alt={"doga"} />
                <h2 className = {styles.h2}>NUMBERS FOR 2019</h2>
                <p>
                    510 Pets in Care on January 1, 2018
                </p>
                <p>
                    Total Intake: 9,946 (5,755 dogs, 3,955 cats, 236 other)
                </p>
                
                <p>
                    6,824 Pets Adopted
                </p>
                <p>
                    1,318 Pets Returned to Owners
                </p>
                <p>
                    733 Transferred to other agencies
                </p>
                <br/>
                <img className={styles.image} src= "/images/recordChart.png"  alt={"doga"} />

                <br/>
                <h2 className = {styles.h2}>AWARDS</h2>
                <h3>Nonprofit Connect Philly Awards</h3>
                <p>
                    Gold Award for Best Special Event – Happily Ever After, a Dog Wedding
                </p>
                <p>
                    Silver Award for Best Medium Length Video – Unsung Hero Award
                </p>
                <h3>The Pitch Best of Kansas City</h3>
                <p>
                    Best Place to Adopt a Pet
                </p>
            
                <br/>
                <h2 className = {styles.h2}>MAJOR SUCCESSES</h2>
                <p>
                While they were many, one of the major successes was that we finished 2018 with a 95% live-release rate!
                </p>
                
            </div>

            
      </div>

  );
};

export default Records;
