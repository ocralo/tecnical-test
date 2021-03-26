import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	Card,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";

import FloatMessage, {
	FloatMessageFrom,
} from "./../FloatMessage/FloatMessage";

import socket from "./../../helper/socketIo/socketIo";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
	socketGetMessage,
	socketSendMessage,
	socketGetMessageOn,
} from "./../../helper/requests/socketRequest";

function ChatForm({ id }) {
	const [messageSend, setMessageSend] = useState("");
	const dispatch = useDispatch();
	const { messages } = useSelector((state) => state.chatReducer);
	const {
		user: { nickName: nickNameUser, id: idUser },
	} = useSelector((state) => state.userReducer);

	useEffect(() => {
		socket.on("Message:create", (msgSocket) => {
			console.log("gg", { msgSocket });
			if (!!msgSocket) {
				dispatch(socketGetMessageOn(msgSocket.data));
			}
		});
	}, []);

	useEffect(() => {
		dispatch(socketGetMessage(id));
	}, [id]);

	return (
		<Card className="text-center">
			<Card.Header className="bg-secondary text-white font-weight-bold">
				Nombre de la room: {messages[0]?.name_room}
			</Card.Header>
			<Card.Body
				className="d-flex flex-column overflow-auto bg-light"
				style={{ height: 300 }}>
				{Array.isArray(messages) &&
					messages.map(
						({ message_text, create_message, id, nickname }) => {
							if (nickNameUser == nickname) {
								return (
									<FloatMessage
										key={id}
										message={message_text}
										date={create_message}
									/>
								);
							} else {
								return (
									<FloatMessageFrom
										key={id}
										message={message_text}
										date={create_message}
									/>
								);
							}
						}
					)}
			</Card.Body>
			<Card.Footer className="text-muted p-0 border-top-0">
				<InputGroup>
					<FormControl
						placeholder="..."
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						type="text"
						value={messageSend}
						onChange={(e) => setMessageSend(e.target.value)}
					/>
					<InputGroup.Append>
						<Button
							variant="success"
							onClick={() =>
								dispatch(
									socketSendMessage({
										msg: messageSend,
										idUser,
										nameRoom: id,
									})
								)
							}>
							Enviar
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Card.Footer>
		</Card>
	);
}

ChatForm.propTypes = { id: PropTypes.number };

export default ChatForm;
