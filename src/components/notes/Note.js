import React from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
function Note({ title, note, index, deleteNote }) {
	return (
		<div className="col s12 m6">
			<div className="card indigo lighten-2">
				<div className="card-content white-text">
					<div className="row">
						<div className="col s9">
							<span className="card-title">{title}</span>
							<p>{note}</p>
						</div>
						<div className="col s3">
							<div className="row">
								<a
									className="btn-floating btn-large waves-effect waves-light red"
									onClick={() => deleteNote(index)}>
									<i className="material-icons rigth">delete</i>
								</a>
							</div>
							<div className="row">
								<Link to={`/edit_note/${index}`}>
									<span className="btn-floating btn-large waves-effect waves-light red">
										<i className="material-icons rigth">edit</i>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			deleteNote: Actions.deleteNote
		},
		dispatch
	);
};

export default connect(
	null,
	mapDispatchToProps
)(Note);
