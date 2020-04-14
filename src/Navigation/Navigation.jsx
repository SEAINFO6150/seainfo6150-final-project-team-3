import React, {useState} from 'react'
import styles from './Navigation.module.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import News from "../News/News";
import ContactUS from "../ContactUS/ContactUS";
import Care from "../Care/Care";
import Dog from "../Care/Dog/Dog";
import Cat from "../Care/Cat/Cat";
import Other from "../Care/Other/Other";
import ArticleDogCare1 from "../Care/Dog/ArticleDogCare1";
import ArticleDogCare2 from "../Care/Dog/ArticleDogCare2";
import ArticleDogCare3 from "../Care/Dog/ArticleDogCare3";
import ArticleDogCare4 from "../Care/Dog/ArticleDogCare4";
import ArticleCatCare1 from "../Care/Cat/ArticleCatCare1";
import ArticleCatCare2 from "../Care/Cat/ArticleCatCare2";
import ArticleCatCare3 from "../Care/Cat/ArticleCatCare3";
import ArticleCatCare4 from "../Care/Cat/ArticleCatCare4";
import HorseCare from "../Care/Other/HorseCare";
import RabbitCare from "../Care/Other/RabbitCare";
import MouseCare from "../Care/Other/MouseCare";
import AdoptionPage from "../Adoption/AdoptionPage";
import PetDetailPage from "../Adoption/PetDetailPage";
import AdoptionList from "../Adoption/AdoptionList.jsx";
import AboutUS from "../AboutUS/AboutUS";
import News1 from "../News/NewsDetails/News1";
import News2 from "../News/NewsDetails/News2";
import News3 from "../News/NewsDetails/News3";
import News4 from "../News/NewsDetails/News4";
import News5 from "../News/NewsDetails/News5";
import News6 from "../News/NewsDetails/News6";
import Event1 from "../News/NewsDetails/Event1";
import Event2 from "../News/NewsDetails/Event2";
import Event3 from "../News/NewsDetails/Event3";
import AskPet from "../Adoption/AskPet/AskPet.jsx";
import Terms from "../BottomNav/Terms";
import FAQs from "../BottomNav/FAQs";
import ForDeveloper from "../BottomNav/ForDeveloper";
import Partnership from "../BottomNav/Partnership";
import GetInvolved from "../GetInvolved/GetInvolved";
import Records from "../Adoption/AdoptionRecords.jsx";



const Navigation = () => {
    return (
        <Router>
            {/*top navigation*/}
            <div className={styles.NavContainer}>
                <div className={styles.LogoDiv}>
                    <img className={styles.logoImg} src="/images/ddog.png" alt="logo" />
                    <header className={styles.slogan}>Welcome! Find the right pet for you!</header>
                </div>
                <nav className={styles.navBar}>
                    <Link tabIndex="1" to="/Home">HomePage</Link>
                    <Link tabIndex="2" to="/Adoption">Pets Adoption</Link>
                    <Link tabIndex="3" to="/Care">Pets Care</Link>
                    <Link tabIndex="4" to="/News">News & Event</Link>
                    <Link tabIndex="5" to="/AboutUS">About Us</Link>
                    <Link tabIndex="6" to="/GetInvolved">Get Involved</Link>
                </nav>
            </div>
            <div>
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Adoption" exact component={AdoptionList} />
                    <Route path="/care/cat_care_1" exact component={ArticleCatCare1} />
                    <Route path="/care/cat_care_2" exact component={ArticleCatCare2} />
                    <Route path="/care/cat_care_3" exact component={ArticleCatCare3} />
                    <Route path="/care/cat_care_4" exact component={ArticleCatCare4} />
                    <Route path="/care/dog_care_1" exact component={ArticleDogCare1} />
                    <Route path="/care/dog_care_2" exact component={ArticleDogCare2} />
                    <Route path="/care/dog_care_3" exact component={ArticleDogCare3} />
                    <Route path="/care/dog_care_4" exact component={ArticleDogCare4} />
                    <Route path="/care/other_1" exact component={HorseCare} />
                    <Route path="/care/other_2" exact component={MouseCare} />
                    <Route path="/care/other_3" exact component={RabbitCare} />
                    <Route path="/care/dog" exact component={Dog} />
                    <Route path="/care/cat" exact component={Cat} />
                    <Route path="/care/other" exact component={Other} />
                    <Route path="/Care" exact component={Care} />
                    <Route path="/News" exact component={News} />
                    <Route path="/News/NewsDetails/News1" exact component={News1}/>
                    <Route path="/News/NewsDetails/News2" exact component={News2} />
                    <Route path="/News/NewsDetails/News3" exact component={News3} />
                    <Route path="/News/NewsDetails/Event1" exact component={Event1} />
                    <Route path="/News/NewsDetails/Event2" exact component={Event2} />
                    <Route path="/News/NewsDetails/Event3" exact component={Event3} />
                     <Route path="/News/NewsDetails/News4" exact component={News4}/>
                     <Route path="/News/NewsDetails/News5" exact component={News5} />
                     <Route path="/News/NewsDetails/News6" exact component={News6} />

                    <Route path="/AboutUS" exact component={AboutUS} />
                    <Route path="/ContactUS" exact component={ContactUS} />
                    <Route path="/askPet" exact component={AskPet}/>
                    <Route path="/Terms" exact component={Terms}/>
                    <Route path="/FAQs" exact component={FAQs}/>
                    <Route path="/ForDeveloper" exact component={ForDeveloper}/>
                    <Route path="/Partnership" exact component={Partnership}/>
                    <Route path="/GetInvolved" exact component={GetInvolved}/>
                    <Route path="/Records" exact component={Records}/>
                    <Route path="/adoption/:adoption"
                           exact
                           render = {({match}) => (
                               <AdoptionPage adoption={match.params.adoption}/>
                           )
                           }
                    />
                    <Route
                        path="/detail/:id"
                        exact
                        render={({ match }) => (
                            <PetDetailPage id={match.params.id}/>
                        )}
                    />

                    <Route component={Home} />
                </Switch>
            </div>

            <img className={styles.bottomImg} src="/images/BottomLogo.png" alt="BottomLogo" />

            {/*bottom navigation*/}
            <div className={styles.footerNav}>
                <nav className={styles.footerBar}>
                    <Link to="/AboutUS">About Us</Link>
                    <Link to="/FAQs">FAQs</Link>
                    <Link to="/Partnership">Partnerships</Link>
                    <Link to="/Terms">Terms & Services</Link>
                    <Link to="/ForDeveloper">For Developers</Link>
                    <Link to="/ContactUS">Contact Us</Link>
                </nav>
                <div className={styles.claim}>
                    ©2020 NEU Web Design Team 3: Animal Adoption
                    <br/>
                    Team Member: Yali Sun, Cong Zhao, Xiaozi Xuan and Yan Lei
                </div>
            </div>
        </Router>
    )
}


const externalContent = {
    id: "article-1",
    title: "An Article",
    author: "April Bingham",
    text: "Some text in the article"
};

export default Navigation;
