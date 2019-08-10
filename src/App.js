import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import NotesList from './components/notes';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NewNote from './components/notes/NewNote';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import config from './configure/store';

const App = () => {
	let { store, persistor } = config();
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Navbar />
					<div className="container internal">
						<Redirect from="/" to="/notes" />
						<Route
							path="/notes"
							render={(props) => {
								return <NotesList {...props} />;
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
			</PersistGate>
		</Provider>
	);
};

export default App;
