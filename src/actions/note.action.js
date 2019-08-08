export const NOTE_ADD = 'NOTE ADD';

export const addNote = (title, note) => (dispatch) => {
	return dispatch({ type: NOTE_ADD, payload: { title, note } });
};
