import React, {useState} from 'react'
import styles from './Navigation.module.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Home from "../Home/Home";
import Foo from "../Foo/Foo";
import Bar from "../Bar/Bar";
import Baz from "../Baz/Baz";
import Error from "../Error/Error";
import News from "../News/News";
import ContactUS from "../ContactUS/ContactUS";


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
                    <Route path="/Adoption" exact component={Home} />
                    <Route path="/Care" exact component={Foo} />
                    {/* passing parameters via a route path */}

                    <Route path="/News" exact component={News} />

                    <Route path="/ContactUs" exact component={ContactUS} />

                    <Route path="/Bar" exact component={Bar} />

                    <Route
                        path="/baz"
                        exact
                        render={() => <Baz content={externalContent} />}
                    />
                    <Route component={Bar} />
                </Switch>
            </div>


            {/*bottom navigation*/}
            <nav className={styles.footerNav}>
                <ul>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/foo">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/bar/hats/sombrero">Partnerships</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/baz">Terms & Services</Link>
                    </li>
                    <li>
                        <Link to="/baz">For Developers</Link>
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
