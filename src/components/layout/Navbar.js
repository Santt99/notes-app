import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<div className="navbar-fixed">
			<nav className="indigo darken-4">
				<div className="container">
					<div className="nav-wrapper ">
						<span className="brand-logo">Noap</span>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/notes">Notes</Link>
							</li>
							<li>
								<Link to="/new_note">New Note</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
