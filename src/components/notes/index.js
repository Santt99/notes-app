import React, { useState } from 'react';
import Note from './Note';

export default function NotesList() {
	const [notes] = useState([]);
	return notes.map(({ title, note }, index) => {
		return (
			<div className="col s4">
				<Note title={title} note={note} key={index} />
			</div>
		);
	});
}
