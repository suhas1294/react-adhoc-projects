import * as actionType from './../actions/actionTypes';

const initialState = {
    allResults: []
};

const dictionaryReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case actionType.GET_MEANING: return getMeaning(state, action.responsePayload);
        default: return state;
    }
};

const getMeaning = (state, responsePayload) => {
    let tempArray = [...state.allResults];
    tempArray.push(responsePayload);
    return {allResults: tempArray};
}

export default dictionaryReducer;