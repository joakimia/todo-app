export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MOVE_TODO = 'MOVE_TODO';

export const acAddTodo = value => ({
    type: ADD_TODO,
    value,
});

export const acUpdateTodo = value => ({
    type: UPDATE_TODO,
    value,
});

export const acMoveTodo = value => ({
    type: MOVE_TODO,
    value,
});

export const acRemoveTodo = value => ({
    type: REMOVE_TODO,
    value,
});