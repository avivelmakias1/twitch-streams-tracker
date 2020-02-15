import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { store } from "../../store/store";
import { validateUser } from "../../services/twitch/connection";

function Landing() {
	const { state } = useContext(store);
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
