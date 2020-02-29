import React from "react";
import PropTypes from "prop-types";

import "./displayLiveStream.css";

function DisplayLiveStream({ liveStream }) {
	return (
		<div className={"livestreamer"} key={liveStream._data._id}>
			<img
				src={liveStream._data.channel.logo}
				alt={"streamer icon"}
				className={"streamer-icon"}
			/>
			<div className={"streamer-wrapper"}>
				<span className={"streamer-name"}>
					{liveStream._data.channel.display_name}
				</span>
				<span className={"game"}>{liveStream._data.game}</span>
			</div>
			<div className={liveStream._data.stream_type && ""}></div>
		</div>
	);
}

DisplayLiveStream.propTypes = {
	liveStream: PropTypes.object.isRequired
};

export default DisplayLiveStream;
