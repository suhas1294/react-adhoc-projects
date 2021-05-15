import React from 'react';
import styles from './EmailCard.module.css';

const EmailCard = (props) => {
    let receivedDate = new Date(props.detail.date);
    let formatedDate = `${receivedDate.getDate()}/${receivedDate.getMonth()}/${receivedDate.getFullYear()}`;
    let formatedTime = `${receivedDate.getHours()}:${receivedDate.getMinutes()}`;
    let emailDetail = {...props.detail, formatedDate, formatedTime};

    return(
        <div className={styles.MainCard} onClick={() => props.getDetail(emailDetail)} >
            <div className={styles.ProfilePic}>{props.detail.from.name.charAt(0)}</div>
            <div className={styles.previewContent}>
                <p>From: {props.detail.from.email}</p>
                <p>Subject: {props.detail.subject}</p>
                <p>{props.detail.short_description}</p>
                <p>{formatedDate}, {formatedTime}</p>
            </div>
        </div>
    );
}

export default EmailCard;