import React from 'react';
import StepListContainer from '../step_list/step_list_container';

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
                {todo.body}
                <button onClick={this.handleClickDelete}> Delete! </button>
                <StepListContainer todo_id={todo.id}/>
            </div>
        );
    }
}

export default TodoDetailView;