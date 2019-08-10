import React from 'react';

function Note({ title, note, key }) {
	return (
		<div className="col s6">
			<div className="card indigo lighten-2">
				<div className="card-content white-text">
					<div className="row">
						<div className="col s10">
							<span className="card-title">{title}</span>
							<p>{note}</p>
						</div>
						<div className="col s2">
							<a class="btn-floating btn-large waves-effect waves-light red">
								<i class="material-icons">delete</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Note;
