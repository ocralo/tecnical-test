import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Listchat.module.css";

import { ListGroup } from "react-bootstrap";
import { date } from "./../../helper/date/date";

function ListChat({ rooms, handleDelete, handleSelected }) {
	return (
		<ListGroup className="overflow-auto" style={{ height: 315 }}>
			{Array.isArray(rooms) &&
				rooms.map(({ id_room, name_room, create_date_room }) => (
					<ListGroup.Item
						onClick={() => handleSelected(id_room)}
						className={`position-relative shadow ${styles.button_hover}`}
						key={id_room}>
						<span
							className="position-absolute"
							style={{
								top: 5,
								right: 10,
								cursor: "pointer",
								fontWeight: 700,
								fontSize: 12,
							}}
							onClick={() => handleDelete(id_room)}>
							X
						</span>
						<p className="mb-0">{name_room}</p>
						<p style={{ fontSize: 10, color: "#8e8e8e" }}>
							{date(new Date(create_date_room))}
						</p>
					</ListGroup.Item>
				))}
		</ListGroup>
	);
}

ListChat.propTypes = { rooms: PropTypes.array };

export default ListChat;
