import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';

function NotesList({ notes }) {
	return notes.map(({ title, note }, index) => {
		return (
			<div className="col s4" key={index}>
				<Note title={title} note={note} />
			</div>
		);
	});
}

const mapStateToProps = (state) => {
	return { notes: state.notes };
};

export default connect(
	mapStateToProps,
	null
)(NotesList);
