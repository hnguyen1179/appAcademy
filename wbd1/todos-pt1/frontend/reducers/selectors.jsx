export const allTodos = ({ todos }) => {
    return Object.keys(todos).map( todoId => todos[todoId] );
};

const allSteps = ({ steps }) => {
    return Object.keys(steps).map( stepId => steps[stepId] );
}

export const stepsByTodoId = ({ steps }, todo_id) => {
    return allSteps({ steps }).filter( step => { return step.todo_id === todo_id })
};
