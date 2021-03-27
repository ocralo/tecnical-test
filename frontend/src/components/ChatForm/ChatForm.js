import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
	Card,
	Button,
	InputGroup,
	Form,
	FormControl,
} from "react-bootstrap";

import FloatMessage, {
	FloatMessageFrom,
} from "./../FloatMessage/FloatMessage";

import ToolTipComponent from "./../ToolTipComponent/ToolTipComponent";
import GiphyGridMessage from "../GiphyMessage/GiphyMessage";

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
	const refScroll = useRef(null);
	const dispatch = useDispatch();
	const { messages, roomBeforeSelected } = useSelector(
		(state) => state.chatReducer
	);
	const {
		user: { nickName: nickNameUser, id: idUser },
	} = useSelector((state) => state.userReducer);

	useEffect(() => {
		socket.on("Message:create", (msgSocket) => {
			if (!!msgSocket) {
				dispatch(socketGetMessageOn(msgSocket.data));
				refScroll.current.scrollTop = refScroll.current.scrollHeight;
			}
		});
	}, []);

	useEffect(() => {
		dispatch(socketGetMessage(id, roomBeforeSelected));
		refScroll.current.scrollTop = refScroll.current.scrollHeight;
	}, [id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (messageSend !== "") {
			dispatch(
				socketSendMessage({
					msg: messageSend,
					idUser,
					nameRoom: id,
				})
			);
			setMessageSend("");
		}
	};

	const handleSubmitGiff = (dataString) => {
		if (dataString !== "") {
			dispatch(
				socketSendMessage({
					msg: dataString,
					idUser,
					nameRoom: id,
				})
			);
		}
	};

	return (
		<Card className="text-center">
			<Card.Header className="bg-secondary text-white font-weight-bold">
				Nombre de la room: {messages[0]?.name_room}
			</Card.Header>
			<Card.Body
				ref={refScroll}
				className="d-flex flex-column overflow-auto bg-light"
				style={{ height: 300 }}>
				{Array.isArray(messages) &&
					messages.map(
						({ message_text, create_message, id, nickname }) => {
							if (nickNameUser === nickname) {
								return (
									<FloatMessage
										key={id}
										message={message_text}
										date={create_message}
										nickname={nickname}
									/>
								);
							} else {
								return (
									<FloatMessageFrom
										key={id}
										message={message_text}
										date={create_message}
										nickname={nickname}
									/>
								);
							}
						}
					)}
			</Card.Body>
			<Card.Footer className="text-muted p-0 border-top-0">
				<Form onSubmit={handleSubmit}>
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
							<Button type="submit" variant="success">
								Enviar
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
				<ToolTipComponent>
					<GiphyGridMessage handleSelectedGiff={handleSubmitGiff} />
				</ToolTipComponent>
			</Card.Footer>
		</Card>
	);
}

ChatForm.propTypes = { id: PropTypes.number };

export default ChatForm;
