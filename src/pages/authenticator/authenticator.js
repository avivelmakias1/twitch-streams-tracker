import React, { useEffect, useContext } from "react";
import hash from "hash-parse";
import { useHistory } from "react-router-dom";

import { connectionStore } from "../../stores/connection/store";
import { CONNECTION_UPDATE } from "../../stores/actionTypes";
import { createTwitchConnection } from "../../services/twitch/connection";
import { setAccessToken } from "../../services/cookies/accessToken";
import { trackStreams } from "../../router/urls";

function Authenticator() {
	const currentStore = useContext(connectionStore);
	const history = useHistory();
	useEffect(() => {
		async function createConnectionIfNeeded() {
			const urlHash = hash.parse(document.location.href);
			if (urlHash.access_token && !currentStore.state.connection) {
				await currentStore.dispatch({
					type: CONNECTION_UPDATE,
					connection: await createTwitchConnection(urlHash.access_token)
				});
				setAccessToken(urlHash.access_token);
				history.push(trackStreams);
			}
		}
		createConnectionIfNeeded();
	});
	return (
		<>
			<div>authenticated :)</div>
			<button
				onClick={() => {
					history.push(trackStreams);
				}}
			>
				Click here if the page doesn't redirect automaticly
			</button>
		</>
	);
}

export default Authenticator;
