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
import Event1 from "../News/NewsDetails/Event1";
import Event2 from "../News/NewsDetails/Event2";
import Event3 from "../News/NewsDetails/Event3";
import AskPet from "../Adoption/AskPet/AskPet.jsx";
import Terms from "../BottomNav/Terms";
import FAQs from "../BottomNav/FAQs";
import ForDeveloper from "../BottomNav/ForDeveloper";
import Partnership from "../BottomNav/Partnership";
import GetInvolved from "../GetInvolved/GetInvolved";

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
                        <li>
                            <Link to="/Home">HomePage</Link>
                        </li>

                        <li>
                            <Link to="/Adoption">Pets Adoption</Link>
                        </li>
                        <li>
                            <Link to="/Care">Pets Care</Link>
                        </li>
                        <li>
                            <Link to="/News">News & Event</Link>
                        </li>
                        <li>
                            <Link to="/AboutUS">About Us</Link>
                        </li>
                        <li>
                            <Link to="/GetInvolved">Get Involved</Link>
                        </li>
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
                    <Route path="/AboutUS" exact component={AboutUS} />
                    <Route path="/ContactUS" exact component={ContactUS} />
                    <Route path="/askPet" exact component={AskPet}/>
                    <Route path="/Terms" exact component={Terms}/>
                    <Route path="/FAQs" exact component={FAQs}/>
                    <Route path="/ForDeveloper" exact component={ForDeveloper}/>
                    <Route path="/Partnership" exact component={Partnership}/>
                    <Route path="/GetInvolved" exact component={GetInvolved}/>
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


            {/*bottom navigation*/}
            <nav className={styles.footerNav}>
                <ul>
                    <li>
                        <Link to="/AboutUS">About Us</Link>
                    </li>
                    <li>
                        <Link to="/FAQs">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/Partnership">Partnerships</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Terms">Terms & Services</Link>
                    </li>
                    <li>
                        <Link to="/ForDeveloper">For Developers</Link>
                    </li>
                    <li>
                        <Link to="/ContactUS">Contact Us</Link>
                    </li>
                </ul>
            </nav>
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
