import React from 'react';
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const navItems = (props) => {
    return(
        <ul id="menu-items">
            <li><NavLink exact to="/">Interviewers</NavLink></li>
            <li><NavLink exact to="/">Register</NavLink> </li>
            <li><NavLink exact to="/">Login</NavLink> </li>
            <li><a href={props.intSignUpLink} target="_blank">Sign up as Interviewer</a></li>
        </ul>
    )
}

export default navItems;