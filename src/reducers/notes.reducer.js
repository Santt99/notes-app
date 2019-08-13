import { NOTE_ADD, NOTE_DELETE, NOTE_EDIT } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
	const { type, payload } = action;
	if (type === NOTE_ADD) {
		state = state.concat(payload);
	} else if (type === NOTE_DELETE) {
		const deletedNote = state.splice(payload, 1);
		state = state.filter((note) => note !== deletedNote);
	} else if (type === NOTE_EDIT) {
		let { id, note } = payload;
		let newState = [...state];
		newState.splice(id, 1, note);
		state = newState;
	}
	return state;
};
