import React, { useState, useEffect, useContext } from "react";

import { connectionStore } from "../../stores/connection/store";
import { getAllLiveStreams } from "../../services/twitch/user";
import DisplayStreams from "../../components/liveStreams/displayLiveStreams";

function TrackStreams() {
	const [liveStreamers, setLiveStreamers] = useState([]);
	const { state } = useContext(connectionStore);
	useEffect(() => {
		const getStreamers = async () => {
			setLiveStreamers(await getAllLiveStreams(state.connection));
		};
		getStreamers();
	}, [state.connection]);
	return (
		<>
			<DisplayStreams liveStreams={liveStreamers} />
		</>
	);
}

export default TrackStreams;
