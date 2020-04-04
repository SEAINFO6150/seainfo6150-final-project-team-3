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
                            <Link to="/ContactUs">About Us</Link>
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
                    <Route path="/ContactUs" exact component={ContactUS} />

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
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Home">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/Home">Partnerships</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Home">Terms & Services</Link>
                    </li>
                    <li>
                        <Link to="/Home">For Developers</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
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
