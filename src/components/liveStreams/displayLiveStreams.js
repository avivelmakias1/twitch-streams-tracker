import React from "react";
import PropTypes from "prop-types";

import DisplayStreamer from "../liveStream/displayLiveStream";

function DisplayLiveStreams({ liveStreams }) {
	return (
		<>
			{liveStreams.map(liveStream => {
				return <DisplayStreamer liveStream={liveStream} />;
			})}
		</>
	);
}

DisplayLiveStreams.propTypes = {
	liveStreams: PropTypes.object.isRequired
};

export default DisplayLiveStreams;
