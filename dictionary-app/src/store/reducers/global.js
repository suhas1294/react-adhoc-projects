import * as actionType from './../actions/actionTypes';

const initialState = {
    username: "",
    featureSelected: ""
};

const globalReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case actionType.INIT_NAME: return initName(state, action.name);
        default: return state;
    }
};

const initName = (state, name) => {
    return {
        ...state,
        username: name
    };
}

export default globalReducer;