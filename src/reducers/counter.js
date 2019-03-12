import { 
    INCREMENT,
    DECREMENT,
} from '../actions/counter';

const defaultState = {
    counter: 0,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1,   
            }
        case DECREMENT: 
            return {
                counter: state.counter - 1,
            }
        default:
            return state;
    }
};

export const sGetCount = state => state.counter;