// This is an redux action.
// An action exports a function just like a reducer does.
// That function must return an object.
// That object must have a property of type.
// The object can have any other stuff.

export default function() {
	return {
		type: 'UPDATE_HOME',
		payload: 'User clicked the button'
	}
}