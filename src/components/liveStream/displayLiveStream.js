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
				<div className={"name"}>{liveStream._data.channel.display_name}</div>
				<div className={"game"}>{liveStream._data.game}</div>
			</div>
			<div className={"stream-metadata"}>
				<div className={"live-status"}>
					{liveStream._data.stream_type === "live" ? (
						<>
							<div className={liveStream._data.stream_type}></div>
							<span className={"viewers-count"}>
								{liveStream._data.viewers}
							</span>
						</>
					) : (
						<span>Offline</span>
					)}
				</div>
			</div>
		</div>
	);
}

DisplayLiveStream.propTypes = {
	liveStream: PropTypes.object.isRequired
};

export default DisplayLiveStream;
