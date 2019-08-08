import React from 'react';

function Note({ title, note }) {
	return (
		<div class="card indigo lighten-2">
			<div class="card-content white-text">
				<span class="card-title">{title}</span>
				<p>{note}</p>
			</div>
		</div>
	);
}

export default Note;
