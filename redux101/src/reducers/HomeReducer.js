// A reducer is FUCNTION.
// That function returns a piece of state.
// A piece of state is just a object.

// ALL reducer functions have 2 params in their signiture
// 1a. Current value of its state (obj)
// 1b. Thanks to ES6, you usually want to provide a default value for state, in case int's not set for some reason
// 2. info that came from the dispatcher
export default function(state = "Home Page Text", action) {
	if(action.type === "UPDATE_HOME") {
		return action.payload;
	}
	return state;
}