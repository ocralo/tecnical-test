import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Redux
import { useDispatch, useSelector } from "react-redux";
import {
	selectRoomChat,
	socketGetRooms,
	socketOnGetRooms,
	socketDeleteRooms,
} from "./../../helper/requests/socketRequest";

import ListChat from "../../components/ListChat/ListChat";
import ModalRoom from "./../../components/ModalRoom/ModalRoom";
import ChatForm from "./../../components/ChatForm/ChatForm";

import socket from "./../../helper/socketIo/socketIo";

function Chat() {
	const dispatch = useDispatch();
	const { rooms, roomSelected } = useSelector(
		(state) => state.chatReducer
	);
	//const { errorToken } = useSelector((state) => state.userReducer);

	useEffect(() => {
		dispatch(socketGetRooms());
		socket.on("rooms:create", (roomsCreate) => {
			if (!!roomsCreate) {
				dispatch(
					socketOnGetRooms(roomsCreate.data, roomsCreate.error)
				);
			}
		});
		return () => {
			//socket.disconnect();
		};
	}, []);

	const handleDelete = (id) => {
		dispatch(socketDeleteRooms(id));
	};

	const handleSelected = (id) => {
		dispatch(selectRoomChat(id, roomSelected));
	};

	return (
		<Container>
			<Row className="mt-5">
				<Col xs="12" md="6">
					<div className=" d-sm-flex justify-content-between align-items-center mb-4">
						<h5>Salas</h5>
						<ModalRoom />
					</div>
					<div className="ml-2">
						<ListChat
							rooms={rooms}
							handleDelete={handleDelete}
							handleSelected={handleSelected}
						/>
					</div>
				</Col>
				<Col xs="12" md="6">
					{!!roomSelected && <ChatForm id={roomSelected} />}
				</Col>
			</Row>
		</Container>
	);
}

Chat.propTypes = {};

export default Chat;
