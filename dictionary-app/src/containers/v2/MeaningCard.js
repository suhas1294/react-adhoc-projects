import React from 'react';
import styles from './App.module.css';

const meaningCard = (props) => {
    return (
        <div className={styles.Mcard}>
            <p>
                <span className={styles.Highlighter}>{props.query}</span> used as <span className={styles.Highlighter}>{props.usedAs}</span>
            </p>
            <p>
                <span className={styles.Highlighter}>Definition:</span> {props.definition}
            </p>
            <p>
                <span className={styles.Highlighter}>Example:</span> {props.example}
            </p>
        </div>
    );
}

export default meaningCard;