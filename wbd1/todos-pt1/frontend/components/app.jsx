import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = () => {
    return (
        <div className="app">
            <h1 className="title">To Do List!</h1>
            <TodoListContainer />
        </div>
    );
}

export default App;