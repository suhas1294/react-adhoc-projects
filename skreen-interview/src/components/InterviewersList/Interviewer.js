import React from 'react';
import styles from './InterviewerCard.module.css';
import defaultAvatar from './../../static/images/avatar.png'
import {v4 as uuidv4} from 'uuid'

const interviewer = (props) => {
    const scheduleInterviewLink = `#`;
    let picElementSrc = (props.pic === "") ? defaultAvatar : props.profilePic;
    let skillUi = props.skills.map(skill => {
        return <button key={uuidv4()} className={styles.SkillBtn}>{skill}</button>
    });
    let prevCompanies = props.prevPositions.map(position => {
        return <li key={uuidv4()}>{position.compantName}</li>
    });
    let currentPos = (props.curPosition.positionName !== "") ? (<strong><p>{props.curPosition.positionName} at {props.curPosition.currentCompany} </p></strong>) : null ;
    return(
        <div className={styles.Card}>
            <div className={styles.Pic}>
                <img src={picElementSrc} className={styles.Avatar} alt="profile_pic"/>
            </div>
            <div className={styles.ProfileDetail}>
                <h2>{props.fullName}</h2>
                {currentPos}
                {(props.description !== "") ? <p>{props.desc}</p> : null}
                <div className={styles.Skills}>
                    {skillUi}
                </div>
            </div>
            <div className={styles.Contact}>
                <ul className={styles.PrevCompList}>
                    {prevCompanies}
                </ul>
                <a href={scheduleInterviewLink} target="_blank" rel="noreferer">
                    <button className={styles.BookASlot}>Book a Slot</button>
                </a>
            </div>
        </div>
    );
}

export default interviewer;