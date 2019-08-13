import React, { useState } from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
const EditNote = ({ editNote, match, notes }) => {
	const { noteIndex } = match.params;
	console.log(noteIndex);
	const [title, setTitle] = useState(notes[noteIndex].title);
	const [note, setNote] = useState(notes[noteIndex].note);

	const handleChange = ({ target }) => {
		if (target.id === 'title') setTitle(target.value);
		else if (target.id === 'note') setNote(target.value);
	};

	return (
		<div className="row">
			<div className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<input type="text" id="title" className="autocomplete" onChange={handleChange} value={title} />
						<label htmlFor="autocomplete-input">Title</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input type="text" id="note" className="autocomplete" onChange={handleChange} value={note} />
						<label htmlFor="autocomplete-input">Note</label>
					</div>
				</div>
				<div className="row right">
					<Link to="/notes">
						<button
							className="btn-large indigo darken-4 waves-effect waves-light"
							name="action"
							onClick={() => editNote(title, note, noteIndex)}>
							Save
							<i className="material-icons right">send</i>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			editNote: Actions.editNote
		},
		dispatch
	);
};
const mapStateToProps = (state) => {
	return { notes: state.notes };
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditNote);
