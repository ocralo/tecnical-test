import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";

function ToolTipComponent({ children }) {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};
	return (
		<div ref={ref}>
			<Button className="my-2" onClick={handleClick}>
				Enviar Gif
			</Button>

			<Overlay
				show={show}
				target={target}
				placement="top"
				container={ref.current}
				containerPadding={20}>
				<Popover id="popover-contained">
					<Popover.Content>{children}</Popover.Content>
				</Popover>
			</Overlay>
		</div>
	);
}

export default ToolTipComponent;
