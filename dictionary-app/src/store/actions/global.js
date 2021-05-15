import * as actionType from './actionTypes'

export const initName = (name) => {
    return {
        type: actionType.INIT_NAME,
        name: name
    };
};