import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {doneToggle: this.props.step.done}
    }

    handleClickDoneToggle(event) {
        const {step} = this.props
        step.done = !step.done
        this.setState({doneToggle: step.done})
    }

    handleClickDelete(event) {
        this.props.removeStep(this.props.step);
    }

    render() {
        let {step, todo_id} = this.props;
        let {doneToggle} = this.state;

        return (
            <li>
                {step.title}
                <button onClick={this.handleClickDoneToggle.bind(this)}> {doneToggle ? "Undo" : "Done"} </button>
                <button onClick={this.handleClickDelete.bind(this)}> Delete </button>
            </li>
        );
    }
}

export default StepListItem;