import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import NotesList from './components/notes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Note from './components/notes/Note';
function App() {
	return (
		<Fragment>
			<Router>
				<Navbar />

				<div className="container internal">
					<Route
						path="/"
						render={(props) => {
							return <NotesList {...props} />;
						}}
					/>
				</div>
			</Router>
		</Fragment>
	);
}

export default App;
