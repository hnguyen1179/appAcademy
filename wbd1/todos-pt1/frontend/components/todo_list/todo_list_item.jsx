import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDoneToggle = this.handleDoneToggle.bind(this);
        this.handleShowToggle = this.handleShowToggle.bind(this);
        this.state = {doneToggle: this.props.todo.done, showDetail: false};
    }

    handleDoneToggle(event) {
        let {todo} = this.props

        this.props.receiveTodo({
            id: todo.id,
            title: todo.title,
            body: todo.body,
            done: !todo.done,
        });

        this.setState({doneToggle: !todo.done});
    };

    handleShowToggle(event) {
        this.setState({showDetail: !this.state.showDetail})
    }

    render() {
        let { todo } = this.props;
        let { doneToggle, showDetail } = this.state;

        return (
            <div>
                <li> 
                    <button id="done-toggle" onClick={this.handleDoneToggle}> {doneToggle ? "Undo" : "Done"} </button>
                    <label className="todo-title" onClick={this.handleShowToggle}>
                        {todo.title}  
                    </label>
                </li> 

                <small className={showDetail ? "item-detail-show" : "item-detail-hide"}>
                    <TodoDetailViewContainer todo={todo}/>
                </small>
            </div>
        );
    }
}

export default TodoListItem;