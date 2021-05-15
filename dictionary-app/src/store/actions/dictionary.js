import * as actionType from './actionTypes'
import axios from './../../axios-dictionary'

export const getMeaning = (results) => {
    return{
        type: actionType.GET_MEANING,
        responsePayload: results
    }
}

export const getMeaningAsync = (query) => {
    return dispatch => {
        axios.get('/' + query)
            .then(response => {
                let processedResponse = preProcessResponse(response.data);
                dispatch(getMeaning(processedResponse));
            })
            .catch(error => {
                console.log("Cound not get the meaning of word, {}", error);
            });
    }
}

const preProcessResponse = (jsonResponse) => {
    let result = {};
    jsonResponse.forEach(element => {
        result.word = element.word;
        result.meanings = [];
        element.meanings.forEach(meaning => {
            meaning.definitions.forEach(singleMeaning => {
                let singleCardDetails = {};
                singleCardDetails.usedAs = meaning.partOfSpeech;
                singleCardDetails.definition = singleMeaning.definition;
                singleCardDetails.example = singleMeaning.example;
                result.meanings.push(singleCardDetails);
            });
        });
    });
    return result;
}