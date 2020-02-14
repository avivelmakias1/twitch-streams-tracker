import { CONNECTION_UPDATE } from "./actionTypes";
export default {
	[CONNECTION_UPDATE]: (state, action) => {
		return { connection: action.connection };
	}
};
