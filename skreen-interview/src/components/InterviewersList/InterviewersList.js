import React from 'react';
import Interviewer from './Interviewer';
import {v4 as uuidv4} from 'uuid'

const interviewersList = (props) => {
    let listData = props.iList.map(interviewer => {
        return (
            <Interviewer 
                key={uuidv4()}
                fullName={interviewer.fullName}
                desc={interviewer.description}
                curPosition={interviewer.currentPosition}
                skills={interviewer.skills}
                pic={interviewer.profilePic}
                prevPositions={interviewer.previousPositions} />
        )
    });
    return (
        <React.Fragment>
            {listData}
            <div style={{'height': '2rem'}}></div>
        </React.Fragment>
    );
}

export default interviewersList;