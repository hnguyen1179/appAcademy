import React from 'react';
import { uniqueId } from './../../util/util'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: uniqueId(), title: "", body: "", done: false}
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.receiveTodo(this.state)
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        })
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                </label>
                
                <br />

                <label>
                    Body:
                    <input type="text" value={this.state.body} onChange={this.handleBodyChange}/>
                </label>

                <br />

                <input type="submit" value="Add Todo!" />
            </form>
        );
    }
}

export default TodoForm;