import React from 'react';
import {uniqueId} from '../../util/util';

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: uniqueId(), title: "", done: false, todo_id: this.props.todo_id}
        this.renderTitleChange = this.renderTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderTitleChange(event) {
        event.preventDefault();
        this.setState({title: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.receiveStep(this.state);
        this.setState({
            id: uniqueId(),
            title: "",
            done: false,
            todo_id: this.props.todo_id
        })
    }
    
    render() {
        return (
          <form>
            <h3>Create a new step!</h3>
                <label>
                    Step:
                    <input type="text" value={this.state.title} onChange={this.renderTitleChange}/>
                </label>

                <input type="submit" value="Add Step" onClick={this.handleSubmit}/>
          </form> 
        );
    }
}

export default StepForm;