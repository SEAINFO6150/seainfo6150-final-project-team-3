import React, {Component} from 'react'
import Bar from "../Bar/Bar";
import Navigation from "../Navigation/Navigation";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

const Foo = (props) => {

    const clickLink = function (e) {
        // props.history.push(e);
        console.log(e);
    };

    return (
        <div>
            The foo page
            <br/>
            <button onClick={clickLink} >THIS IS A BUTTON</button>
            <br/>
            <button onClick={clickLink}> This is the second Button</button>
        </div>
    )

};




export default Foo
