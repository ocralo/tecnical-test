import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

function NavberMenu() {
	const { user } = useSelector((state) => state.userReducer);
	const history = useHistory();

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

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					{/* user && (
						<Link className="btn btn-outline-secondary" to="/chat">
							Chat
						</Link>
					) */}
					<Button
						onClick={() => {
							console.log("logout");
							localStorage.removeItem("token");
							history.push("/");
						}}>
						Cerrar Sesion
					</Button>
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
