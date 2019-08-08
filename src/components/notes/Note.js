import React from 'react';

function Note({ title, note }) {
	return (
		<div className="card indigo lighten-2">
			<div className="card-content white-text">
				<span className="card-title">{title}</span>
				<p>{note}</p>
			</div>
		</div>
	);
}

export default Note;
