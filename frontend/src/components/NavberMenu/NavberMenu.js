import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

function NavberMenu() {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>
				<Link to="/">
					<img
						src={`${process.env.PUBLIC_URL}/static/RedValley.png`}
						width="100"
						height="25"
						alt="Red Valley"
					/>
				</Link>
			</Navbar.Brand>
			{!user && (
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			)}
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					{/* user && (
						<Link className="btn btn-outline-secondary" to="/chat">
							Chat
						</Link>
					) */}
					{!!!user && (
						<Link className="btn btn-outline-secondary" to="/singup">
							Crear Cuenta
						</Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavberMenu;
