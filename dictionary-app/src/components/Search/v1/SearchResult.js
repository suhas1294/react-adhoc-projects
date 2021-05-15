import React from 'react'
import {v4 as uuidv4} from 'uuid'
import ResultCard from './ResultCard'
import NoResultFound from './../../common/NoResultFound'

const searchResult = (props) => {
    let resElement = <p>Loading...</p>;
    if(props.meaningFound && props.touched && props.searchWord !== ""){
        resElement = props.result.map(answers => {
            return answers.meanings.map(meaningObj => {
                return meaningObj.definitions.map(definition => {
                    return (
                        <ResultCard key={uuidv4()}
                            searchWord={props.searchWord}
                            partOfSpeech={meaningObj.partOfSpeech}
                            definition={definition.definition}
                            example={definition.example}
                        />
                    );
                });
            });
        });
    }else if((!props.touched) || (props.touched && props.searchWord === "") ){
        resElement = null;
    }else{
         resElement = (<NoResultFound searchWord={props.searchWord} />);
    }
    return(
        resElement
    );
}

export default searchResult;