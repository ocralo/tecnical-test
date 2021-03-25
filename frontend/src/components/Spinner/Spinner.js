import React from "react";
import { Spinner } from "react-bootstrap";

function SpinnerLine(props) {
	return (
		<Spinner animation="border" role="status">
			<span className="sr-only">Cargando...</span>
		</Spinner>
	);
}

SpinnerLine.propTypes = {};

export default SpinnerLine;
