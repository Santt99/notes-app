import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<div class="navbar-fixed">
			<nav className="indigo darken-4">
				<div className="container">
					<div class="nav-wrapper ">
						<span class="brand-logo">Noap</span>
						<ul class="right hide-on-med-and-down">
							<li>
								<Link to="/">Notes</Link>
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
