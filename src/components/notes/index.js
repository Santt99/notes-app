import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';

function NotesList({ notes }) {
	if (notes.length > 0) {
		return (
			<div className="row">
				{notes.map(({ title, note }, index) => {
					return <Note title={title} note={note} key={index} />;
				})}
			</div>
		);
	} else {
		return <h1>You don't have notes, please go to the "new note" screen and create one.</h1>;
	}
}

const mapStateToProps = (state) => {
	return { notes: state.notes };
};

export default connect(
	mapStateToProps,
	null
)(NotesList);
