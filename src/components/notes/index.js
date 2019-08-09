import React from 'react';
import Note from './Note';

export default function NotesList({ notes }) {
	return notes.map(({ title, note }, index) => {
		return (
			<div className="col s4">
				<Note title={title} note={note} key={index} />
			</div>
		);
	});
}
