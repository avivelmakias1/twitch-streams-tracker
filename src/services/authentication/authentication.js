import { CONNECTION_UPDATE } from "../../stores/actionTypes";
import { createTwitchConnection } from "../../services/twitch/connection";
import { setAccessToken } from "../../services/cookies/accessToken";

export const createConnection = async (access_token, store) => {
	if (access_token && !store.state.connection) {
		console.log("dispatching...");
		await store.dispatch({
			type: CONNECTION_UPDATE,
			connection: await createTwitchConnection(access_token)
		});
		setAccessToken(access_token);
	}
};
