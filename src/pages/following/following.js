import React, { useState, useEffect, useContext } from "react";

import { connectionStore } from "../../stores/connection/store";
import { getFollowingChannels } from "../../services/twitch/user";

function Following() {
	const [following, setFollowing] = useState([]);
	const { state } = useContext(connectionStore);
	useEffect(() => {
		const getFollowing = async () => {
			setFollowing(await getFollowingChannels(state.connection));
		};
		getFollowing();
	}, [state.connection]);
	return <>{JSON.stringify(following)}</>;
}

export default Following;
