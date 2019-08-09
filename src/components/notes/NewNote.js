import React, { useState } from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
const NewNote = ({ addNote }) => {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');
	const handleChange = ({ target }) => {
		if (target.id === 'title') setTitle(target.value);
		else if (target.id === 'note') setNote(target.value);
	};

	return (
		<div className="row">
			<div className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<input type="text" id="title" className="autocomplete" onChange={handleChange} />
						<label htmlFor="autocomplete-input">Title</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input type="text" id="note" className="autocomplete" onChange={handleChange} />
						<label htmlFor="autocomplete-input">Note</label>
					</div>
				</div>
				<div className="row right">
					<Link to="/">
						<button
							className="btn-large indigo darken-4 waves-effect waves-light"
							name="action"
							onClick={() => addNote(title, note)}>
							Create
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
			addNote: Actions.addNote
		},
		dispatch
	);
};

export default connect(
	null,
	mapDispatchToProps
)(NewNote);
