import React from "react";
import PropTypes from "prop-types";

import DisplayStreamer from "../stream/displayStream";

function DisplayStreams({ streams }) {
	return (
		<>
			{streams.map(streamer => {
				return <DisplayStreamer stream={streamer} />;
			})}
		</>
	);
}

DisplayStreams.propTypes = {
	streams: PropTypes.object.isRequired
};

export default DisplayStreams;
