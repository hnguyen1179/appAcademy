import React from 'react';

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete(event) {
        this.props.removeTodo(this.props.todo);
    }

    render() {
        let { todo } = this.props;

        return (
            <div>
                <button onClick={this.handleClickDelete}> Delete! </button>
                {todo.id}: {todo.body}
            </div>
        );
    }
}

export default TodoDetailView;