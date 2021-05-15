import React from 'react'
import styles from './../Search/v1/Search.module.css'

const noResultFound = (props) => {
    return (
        <h1>Oops ! No Results found for <span className={styles.Highlight}> {props.searchWord}</span>, Please try with a differnt query !</h1>
    );
}

export default noResultFound