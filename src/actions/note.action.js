export const NOTE_ADD = 'NOTE ADD';
export const NOTE_DELETE = 'NOTE DELETE';
export const NOTE_EDIT = 'NOTE EDIT';
export const addNote = (title, note) => {
	return { type: NOTE_ADD, payload: { title, note } };
};
export const deleteNote = (index) => (dispatch) => {
	return dispatch({ type: NOTE_DELETE, payload: index });
};
export const editNote = (title, note, index) => {
	return { type: NOTE_EDIT, payload: { note: { title, note }, id: index } };
};
