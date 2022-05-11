import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
			<Link className="navbar-brand" to="/">
				ReactAndApollo
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-expanded="false"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Task List
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/new-task">
							Create Task
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
