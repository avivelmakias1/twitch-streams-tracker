import React, { useState, useEffect, useContext } from "react";

import { connectionStore } from "../../stores/connection/store";
import { getAllLiveStreams } from "../../services/twitch/user";
import DisplayStreamer from "../../components/stream/displayStream";

function TrackStreams() {
	const [streamers, setStreamers] = useState([]);
	const { state } = useContext(connectionStore);
	useEffect(() => {
		const getStreamers = async () => {
			setStreamers(await getAllLiveStreams(state.connection));
		};
		getStreamers();
	}, [state.connection]);
	return (
		<>
			{streamers.map(streamer => {
				return <DisplayStreamer streamer={streamer} />;
			})}
		</>
	);
}

export default TrackStreams;
