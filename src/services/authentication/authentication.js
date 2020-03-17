import { CONNECTION_UPDATE } from "../../stores/actionTypes";
import { createTwitchConnection } from "../../services/twitch/connection";
import { setAccessToken } from "../../services/web/cookies";

export const createConnection = async (access_token, store) => {
	if (access_token && !store.state.connection) {
		await store.dispatch({
			type: CONNECTION_UPDATE,
			connection: await createTwitchConnection(access_token)
		});
		setAccessToken(access_token);
	}
};
