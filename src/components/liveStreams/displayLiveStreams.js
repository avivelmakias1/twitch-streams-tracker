import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import DisplayStreamer from "../liveStream/displayLiveStream";

function DisplayLiveStreams({ liveStreams }) {
	const [sortedStreams, setSortedStreams] = useState([]);
	useEffect(() => {
		setSortedStreams(
			liveStreams.sort((a, b) => a._data.viewers > b._data.viewers)
		);
	}, [liveStreams]);
	return (
		<>
			{sortedStreams &&
				sortedStreams.map(liveStream => {
					return <DisplayStreamer liveStream={liveStream} />;
				})}
		</>
	);
}

DisplayLiveStreams.propTypes = {
	liveStreams: PropTypes.object.isRequired
};

export default DisplayLiveStreams;
