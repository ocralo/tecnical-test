import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

//Redux
import { useDispatch } from "react-redux";

function NavberMenu() {
	const dispatch = useDispatch();

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img
					src={`${process.env.PUBLIC_URL}/static/RedValley.png`}
					width="100"
					height="25"
					alt="Red Valley"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Button></Button>
					<Nav.Link href="#deets">More deets</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavberMenu;
