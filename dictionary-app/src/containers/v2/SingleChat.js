import React from  'react';
import MeaningCard from './MeaningCard';
import styles from './App.module.css';

const singleChat = (props) => {
    return(
        <div className={styles.SingleChat}>
            <div>
                <p>what is the meaning of "{props.query}" ?</p>
            </div>
            <div className={styles.MeaningCards}>
                {
                    props.meanings.map(meaning => {
                        return (
                            <MeaningCard 
                                query={props.query}
                                usedAs={meaning.usedAs}
                                definition={meaning.definition}
                                example={meaning.example} />)
                    })
                }
            </div>
        </div>
    );
}

export default singleChat;