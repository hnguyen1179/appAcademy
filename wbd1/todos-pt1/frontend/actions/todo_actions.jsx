export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// Action Creators! 
// Takes in an ARRAY containing todo objects
export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
});

export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    todo
});
