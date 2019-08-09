export const NOTE_ADD = 'NOTE ADD';

export const addNote = (title, note) => {
	return { type: NOTE_ADD, payload: { title, note } };
};
