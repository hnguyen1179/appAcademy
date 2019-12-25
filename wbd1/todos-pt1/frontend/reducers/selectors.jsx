export const allTodos = ({ todos }) => {
    return Object.keys(todos).map( todoId => todos[todoId] );
};

export const stepsByTodoId = ({ steps }, todo_id) => {
    let stepsArray = Object.keys(steps).map(stepId => steps[stepId]);
    return stepsArray.filter( step => { return step.todo_id === todo_id })
};

window.stepsByTodoId = stepsByTodoId;