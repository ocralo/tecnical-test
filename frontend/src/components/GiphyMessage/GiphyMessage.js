import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Form,
	FormControl,
	InputGroup,
	Button,
} from "react-bootstrap";
import axios from "axios";

function GiphyGridMessage({ handleSelectedGiff }) {
	const [searchGif, setSearchGif] = useState("");
	const [searchGifAux, setSearchGifAux] = useState("");
	const [arrayGiphy, setArrayGiphy] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchGif(searchGifAux);
		setSearchGifAux("");
	};

	const url = `http://api.giphy.com/v1/gifs`;

	useEffect(() => {
		if (searchGif !== "") {
			axios
				.get(
					`${url}/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&lang=es&limit=20&q=${searchGif}`
				)
				.then(({ data }) => {
					console.log(data.data);
					setArrayGiphy(data.data);
				})
				.catch((err) => console.log(err));
		}
	}, [searchGif]);

	return (
		<>
			<Form onSubmit={handleSubmit} inline>
				<InputGroup className="w-100">
					<FormControl
						placeholder="..."
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						type="text"
						value={searchGifAux}
						onChange={(e) => setSearchGifAux(e.target.value)}
					/>
					<InputGroup.Append>
						<Button type="submit" variant="success">
							Buscar Gif
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>
			<div
				className="d-flex flex-wrap p-1 overflow-auto"
				style={{ height: 215 }}>
				{arrayGiphy.map(({ id, images, title }) => (
					<img
						key={id}
						width="90"
						height="90"
						className="m-1"
						src={images.fixed_height.url}
						alt={title}
						onClick={() =>
							handleSelectedGiff(`/gif ${images.fixed_height.url}`)
						}
					/>
				))}
			</div>
		</>
	);
}

GiphyGridMessage.propTypes = { handleSelectedGiff: PropTypes.func };

export default GiphyGridMessage;
