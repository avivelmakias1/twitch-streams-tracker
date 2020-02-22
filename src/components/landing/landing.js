import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { connectionStore } from "../../stores/connection/store";
import { validateUser } from "../../services/twitch/connection";

function Landing() {
	const { state } = useContext(connectionStore);
	const history = useHistory();
	if (state.connection) {
		return (
			<>
				<div>Welcome authenticated user!</div>
				<button onClick={() => history.push("/search")}>Search</button>
			</>
		);
	}
	return (
		<>
			<div>Welcome Stranger!</div>
			<button onClick={() => validateUser()}> Try Connect </button>
		</>
	);
}

export default Landing;
