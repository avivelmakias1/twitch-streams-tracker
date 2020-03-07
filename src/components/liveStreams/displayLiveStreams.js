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
				sortedStreams.map((liveStream, index) => {
					return <DisplayStreamer key={index} liveStream={liveStream} />;
				})}
		</>
	);
}

DisplayLiveStreams.propTypes = {
	liveStreams: PropTypes.array.isRequired
};

export default DisplayLiveStreams;
