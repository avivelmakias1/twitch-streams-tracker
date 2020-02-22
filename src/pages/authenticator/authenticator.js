import React, { useEffect, useContext } from "react";
import hash from "hash-parse";
import { useHistory } from "react-router-dom";

import { connectionStore } from "../../stores/connection/store";
import { createConnection } from "../../services/authentication/authentication";
import { trackStreams } from "../../router/urls";

function Authenticator() {
	const store = useContext(connectionStore);
	const history = useHistory();
	useEffect(() => {
		(async () => {
			const { access_token } = hash.parse(document.location.href);
			if (access_token && !store.state.connection) {
				await createConnection(access_token, store);
				history.push(trackStreams);
			}
		})();
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
