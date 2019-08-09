import { NOTE_ADD } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
	const { type, payload } = action;
	if (type === NOTE_ADD) return state.push(payload);
	else return initialState;
};
