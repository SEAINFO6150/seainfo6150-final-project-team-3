import React, {useState} from 'react'
import styles from './Navigation.module.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import News from "../News/News";
import ContactUS from "../ContactUS/ContactUS";
import Care from "../Care/Care";
import General from "../Care/General/General";
import Dog from "../Care/Dog/Dog";
import Cat from "../Care/Cat/Cat";
import ArticleAllergic from "../Care/General/ArticleAllergic";
import ArticleDogCare from "../Care/Dog/ArticleDogCare";
import ArticleCatCare from "../Care/Cat/ArticleCatCare";
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
                            <Link to="/baz">Get Involved</Link>
                        </li>
                </nav>
            </div>

            <div>
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Adoption" exact component={AdoptionList} />
                    <Route path="/care/general_cat_care" exact component={ArticleCatCare} />
                    <Route path="/care/general_dog_care" exact component={ArticleDogCare} />
                    <Route path="/care/general_allergies" exact component={ArticleAllergic} />
                    <Route path="/care/general" exact component={General} />
                    <Route path="/care/dog" exact component={Dog} />
                    <Route path="/care/cat" exact component={Cat} />
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
                        <Link to="/Terms">Partnerships</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Terms">Terms & Services</Link>
                    </li>
                    <li>
                        <Link to="/Home">For Developers</Link>
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
