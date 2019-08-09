import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import NotesList from './components/notes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewNote from './components/notes/NewNote';

import { connect } from 'react-redux';
const App = ({ notes }) => {
	console.log(notes);
	return (
		<Fragment>
			<Router>
				<Navbar />
				<div className="container internal">
					<Route
						path="/"
						render={(props) => {
							return <NotesList {...props} notes={notes} />;
						}}
					/>
					<Route
						path="/new_note"
						render={(props) => {
							return <NewNote {...props} />;
						}}
					/>
				</div>
			</Router>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return { notes: state.notes };
};

export default connect(
	mapStateToProps,
	null
)(App);
