const initialState = {
    customList: [{ id: 0, term: 'Inventive-group', answer: 'Paradise' },]
};

const ADD_TO_CUSTOM_LIST = 'ADD_TO_CUSTOM_LIST';

export function addToCustomList(obj){
    return {
        type: ADD_TO_CUSTOM_LIST,
        payload: obj
    };
};

export default function reducer(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ADD_TO_CUSTOM_LIST: 
        return {
            ...state,
             customList: [...state.customList, payload]
        }
        default: 
        return state
    };
};