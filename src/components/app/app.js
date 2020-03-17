import React, { useEffect, useContext } from "react";

import Router from "../../router/router";
import { connectionStore } from "../../stores/connection/store";
import { createConnection } from "../../services/authentication/authentication";
import { getAccessToken } from "../../services/web/cookies";

import "./app.css";

function App() {
	const store = useContext(connectionStore);
	useEffect(() => {
		(async () => {
			const access_token = getAccessToken();
			if (access_token && !store.state.connection) {
				await createConnection(access_token, store);
			}
		})();
	}, [store]);
	return (
		<div className="App">
			<Router />
		</div>
	);
}

export default App;
