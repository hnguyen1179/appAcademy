const initialState = {
  city: "Please Select", 
  jobs: [{ title: "fuck",
            company: "shit",
            location: "damn",
            type: "tits",
            description: "ass",
            info: "shit" }]
};

const reducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case "SWITCH_LOCATION":
      newState.city = action.city;
      newState.jobs = action.jobs;
      return newState;
    default:
      return state;
  }
};
export default reducer;
