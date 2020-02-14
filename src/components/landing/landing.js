import React, { useContext } from "react";
import { store } from "../../store/store";
import { validateUser } from "../../services/twitch/connection";
function Landing() {
	const { state } = useContext(store);

	if (state.connection) {
		return <div>Welcome authenticated user!</div>;
	}
	return (
		<>
			<div>Welcome Stranger!</div>
			<button onClick={() => validateUser()}> Try Connect </button>
		</>
	);
}

export default Landing;
