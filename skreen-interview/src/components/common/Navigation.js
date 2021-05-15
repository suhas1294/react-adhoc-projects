import React from 'react';
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import NavItems from './NavItems';

const navigation = (props) => {
    const interViewerLink = `#`;
    if (props.menuShown) {
        
    }
    return(
        <nav>
            <div id={styles.TopToolBar}>
                <NavLink id={styles.Logo} exact to="/">skreen</NavLink>
                <div id={styles.Hamburger} onClick={props.hamburgerClicked} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {props.menuShown ? <NavItems intSignUpLink={interViewerLink} /> : null }
        </nav>
    )
}

export default navigation;