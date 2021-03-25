import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function FloatMessage({ message, date }) {
	return (
		<Card
			style={{ width: "80%" }}
			className="align-self-start bg-light p-0 my-2 text-left">
			<Card.Body className=" p-2">
				<p className="m-0 ">to</p>
				<p className="m-0 text-right" style={{ fontSize: 10 }}>
					03/04/2020
				</p>
			</Card.Body>
		</Card>
	);
}

FloatMessage.propTypes = {
	message: PropTypes.string,
	date: PropTypes.string,
};

export function FloatMessageFrom({ message, date }) {
	return (
		<Card
			style={{ width: "80%" }}
			className="align-self-end text-white bg-dark p-0 my-2 text-right">
			<Card.Body className=" p-2">
				<p className="m-0">send</p>
				<p
					className="m-0 text-white"
					style={{ fontSize: 10, color: "#d2d2d2 !important" }}>
					03/04/2020
				</p>
			</Card.Body>
		</Card>
	);
}

FloatMessageFrom.propTypes = {
	message: PropTypes.string,
	date: PropTypes.string,
};

export default FloatMessage;
