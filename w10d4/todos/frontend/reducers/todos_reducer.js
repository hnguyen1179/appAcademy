import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todosReducer;