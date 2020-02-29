import React from "react";
import PropTypes from "prop-types";

import "./displayStreamer.css";

function DisplayStreamer({ streamer }) {
	return (
		<div className={"streamer"} key={streamer._data._id}>
			<img
				src={streamer._data.channel.logo}
				alt={"streamer icon"}
				className={"streamer-icon"}
			/>
			<div className={"streamer-wrapper"}>
				<span className={"streamer-name"}>
					{streamer._data.channel.display_name}
				</span>
				<span className={"game"}>{streamer._data.game}</span>
			</div>
			<div className={streamer._data.stream_type && ""}></div>
		</div>
	);
}

DisplayStreamer.propTypes = {
	streamer: PropTypes.object.isRequired
};

export default DisplayStreamer;
