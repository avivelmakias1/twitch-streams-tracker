import React from "react";
import PropTypes from "prop-types";

import "./displayStream.css";

function DisplayStream({ stream }) {
	return (
		<div className={"streamer"} key={stream._data._id}>
			<img
				src={stream._data.channel.logo}
				alt={"streamer icon"}
				className={"streamer-icon"}
			/>
			<div className={"streamer-wrapper"}>
				<span className={"streamer-name"}>
					{stream._data.channel.display_name}
				</span>
				<span className={"game"}>{stream._data.game}</span>
			</div>
			<div className={stream._data.stream_type && ""}></div>
		</div>
	);
}

DisplayStream.propTypes = {
	streamer: PropTypes.object.isRequired
};

export default DisplayStream;
