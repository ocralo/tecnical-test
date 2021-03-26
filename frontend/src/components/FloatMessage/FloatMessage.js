import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { dateHour } from "./../../helper/date/date";

function FloatMessage({ message, date }) {
	return (
		<Card
			style={{ width: "80%" }}
			className="align-self-start bg-white p-0 my-2 text-left">
			<Card.Body className=" p-2">
				<p className="m-0 ">{message}</p>
				<p className="m-0 text-right" style={{ fontSize: 10 }}>
					{dateHour(new Date(date))}
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
				<p className="m-0">{message}</p>
				<p
					className="m-0 text-white"
					style={{ fontSize: 10, color: "#d2d2d2 !important" }}>
					{dateHour(new Date(date))}
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
