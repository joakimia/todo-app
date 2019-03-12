import { 
    ADD_TODO, 
    UPDATE_TODO, 
    MOVE_TODO, 
    REMOVE_TODO 
} from '../actions/todos';

import { addItem, updateItem, moveItem, removeItem } from '../modules/arrayHelper';

const defaultState = {
    inProgress: [],
    completed: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign(
                {}, 
                state, 
                { [action.value.destArr]: addItem(
                    state[action.value.destArr], 
                    action.value.text
                )}
            );
        case UPDATE_TODO:
            return Object.assign(
                {}, 
                state,
                { [action.value.sourceArr]: updateItem(
                    state[action.value.sourceArr], 
                    action.value.index, action.value.text
                )}
            );
        case MOVE_TODO:
            return Object.assign(
                {},
                state,
                moveItem(
                    state, 
                    action.value.sourceArr,
                    action.value.destArr,
                    action.value.index,
                )
            );
        case REMOVE_TODO:
            return Object.assign(
                {},
                state,
                { [action.value.sourceArr]: removeItem(
                    state[action.value.sourceArr],
                    action.value.index)
                }
            );
        default:
            return state;
    }
};


export const sGetTodos = state => state.todos;

export const sGetInProgress = state => sGetTodos(state).inProgress;

export const sGetCompleted = state => sGetTodos(state).completed;