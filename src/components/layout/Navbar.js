import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<div className="navbar-fixed">
			<nav className="indigo darken-4">
				<div className="container">
					<div className="row">
						<div className="col s5 m8 l9">
							<span className="brand-logo left">Noap</span>
						</div>
						<div className="col s7 m4 l3">
							<ul>
								<li>
									<Link to="/notes">Notes</Link>
								</li>
								<li>
									<Link to="/new_note">New Note</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
