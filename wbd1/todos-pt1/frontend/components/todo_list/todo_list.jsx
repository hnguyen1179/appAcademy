import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, receiveTodo } = this.props;
        const todoItems = todos.map((todo) => (
                <TodoListItem 
                key={todo.id} 
                todo={todo} 
                receiveTodo={receiveTodo}
                />
            )
        );

        return (
            <div className="todo-list">
                <TodoForm receiveTodo={receiveTodo} />
                <ul className="todo-list-items">
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default TodoList