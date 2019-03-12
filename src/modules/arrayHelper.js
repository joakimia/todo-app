
export const addItem = (arr, text) => [
    ...arr,
    text
];

export const updateItem = (arr, index, text) => [
    ...arr.slice(0, index),
    text,
    ...arr.slice(index + 1),
];

export const removeItem = (arr, index) => [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
];

export const moveItem = (state, sourceArr, destArr, index) => {
    if (sourceArr !== destArr) {
        return sourceArr === 'inProgress' ?
        {
            completed: addItem(state.completed, state.inProgress[index]),
            inProgress: removeItem(state.inProgress, index)
        } : { 
            inProgress: addItem(state.inProgress, state.completed[index]),
            completed: removeItem(state.completed, index)
        }
    }
};