import React, { useState, useEffect, useContext } from "react";

import { connectionStore } from "../../stores/connection/store";
import { getFollowingLiveStreams } from "../../services/twitch/user";
import DisplayStreams from "../../components/liveStreams/displayLiveStreams";

function TrackStreams() {
	const [liveStreamers, setLiveStreamers] = useState([]);
	const { state } = useContext(connectionStore);
	useEffect(() => {
		const getStreamersIfPageIsVisible = async () => {
			if (!document.hidden)
				setLiveStreamers(await getFollowingLiveStreams(state.connection));
		};
		getStreamersIfPageIsVisible();
		window.addEventListener("visibilitychange", getStreamersIfPageIsVisible);
		return () => {
			window.removeEventListener(
				"visibilitychange",
				getStreamersIfPageIsVisible
			);
		};
	}, [state.connection]);
	return (
		<>
			<DisplayStreams liveStreams={liveStreamers} />
		</>
	);
}

export default TrackStreams;
