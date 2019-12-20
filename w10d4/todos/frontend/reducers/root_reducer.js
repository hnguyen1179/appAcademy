import { combineReducers } from "redux";
import todosReducer from "./reducers/todos_reducer";

const rootReducer = combineReducers({
  todos: todosReducer
});



export default rootReducer;