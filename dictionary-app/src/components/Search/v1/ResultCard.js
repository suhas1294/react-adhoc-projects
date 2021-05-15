import React from 'react';
import styles from './Search.module.css'

const resultCard = (props) => {
    return(
        <div className={styles.Card}>
            <p>
                <span className={styles.Highlight}>{props.searchWord} </span>
                used as <span className={styles.Highlight}>{props.partOfSpeech}</span>
            </p>
            <p><span className={styles.Highlight}>meaning:</span> {props.definition}</p>
            <p><span className={styles.Highlight}>example:</span> {props.example}</p>
        </div>
    )
}

export default resultCard;