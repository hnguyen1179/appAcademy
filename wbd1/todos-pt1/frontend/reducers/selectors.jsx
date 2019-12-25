export const allTodos = ({ todos }) => {
    return Object.keys(todos).map( todoId => todos[todoId] );
};
