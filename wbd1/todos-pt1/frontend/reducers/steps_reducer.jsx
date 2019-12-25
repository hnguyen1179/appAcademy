import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions"

const defaultStep = {
    1: {
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { 
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
}

const stepsReducer = (state = defaultStep, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {        
        case RECEIVE_STEP:
            newState[action.step.id] = action.step;
            return newState;
        case RECEIVE_STEPS:
            action.steps.map( step => newState[action.step.id] = step);
            return newState;
        case REMOVE_STEP:
            delete newState[action.step.id];
            return newState;
        default: 
            return state;
    }
}

export default stepsReducer;