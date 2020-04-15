import React from "react";
import styles from "./AdoptionRecords.module.css";


const Records = props => {
  return (
      <div className={styles.container}>
        <header>2019 STATISTICS</header>
        <div className = {styles.content}>
                <h1 className = {styles.h1}>NUMBERS FOR 2019</h1>
                <p>
                    *510 Pets in Care on January 1, 2018 &nbsp; &nbsp;  *Total Intake: 9,946 (5,755 dogs, 3,955 cats, 236 other)
                </p>
                
                <p>
                    *6,824 Pets Adopted  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;*1,318 Pets Returned to Owners
                </p>
                <p>
                    733 Transferred to other agencies
                </p>
                <br/>
                <img className={styles.image} src= "/images/Records-dog.jpg"/>&nbsp; &nbsp; 
                <img className={styles.image} src= "/images/recordChart.png"  alt={"doga"} />

                <br/>
                <h1 className = {styles.h1}>AWARDS</h1>
                <h2 className = {styles.h2}>Nonprofit Connect Philly Awards</h2>
                <p>
                    Gold Award for Best Special Event – Happily Ever After, a Dog Wedding
                </p>
                <p>
                    Silver Award for Best Medium Length Video – Unsung Hero Award
                </p>
                <h2 className = {styles.h2}>The Pitch Best of Kansas City</h2>
                <p>
                    Best Place to Adopt a Pet
                </p>
            
                <h1 className = {styles.h1}>MAJOR SUCCESSES</h1>
                <p>
                While they were many, one of the major successes was that we finished 2018 with a 95% live-release rate!
                </p>
                
            </div>

            
      </div>

  );
};

export default Records;
