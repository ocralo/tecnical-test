import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { dateHour } from "./../../helper/date/date";

/* const replaceURLWithHTMLLinks = (text) => {
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	return text.replace(exp, "<a href='$1'>$1</a>");
}; */

const replaceGifWithHTMLImg = (text) => {
	var exp = /\/([gif]+\s)([\s\S\n]*)/g;
	return text.replace(exp, `<img src="$2" width="90" height="90" />`);
};

function FloatMessage({ message, date }) {
	return (
		<Card
			style={{ width: "80%" }}
			className="align-self-end bg-white p-0 my-2 text-left">
			<Card.Body className=" p-2">
				<p
					className="m-0 "
					dangerouslySetInnerHTML={{
						__html: replaceGifWithHTMLImg(message),
					}}></p>
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

export function FloatMessageFrom({ message, nickname, date }) {
	return (
		<Card
			style={{ width: "80%" }}
			className="align-self-start text-white bg-dark p-0 my-2 text-left">
			<Card.Body className=" p-2">
				<p className="m-0 " style={{ fontSize: 8 }}>
					<b>{nickname}</b>
				</p>
				<p
					className="m-0"
					dangerouslySetInnerHTML={{
						__html: replaceGifWithHTMLImg(message),
					}}></p>
				<p
					className="m-0 text-white text-right"
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
	nickname: PropTypes.string,
};

export default FloatMessage;
