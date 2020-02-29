import React, { useState, useEffect, useContext } from "react";

import { connectionStore } from "../../stores/connection/store";
import { getAllLiveStreams } from "../../services/twitch/user";
import DisplayStreams from "../../components/streams/displayStreams";

function TrackStreams() {
	const [livestreamers, setLivetreamers] = useState([]);
	const { state } = useContext(connectionStore);
	useEffect(() => {
		const getStreamers = async () => {
			setLivetreamers(await getAllLiveStreams(state.connection));
		};
		getStreamers();
	}, [state.connection]);
	return (
		<>
			<DisplayStreams streams={livestreamers} />
		</>
	);
}

export default TrackStreams;
