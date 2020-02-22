import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = { connection: null };
const connectionStore = createContext(initialState);
const { Provider } = connectionStore;

const ConnectionProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		if (action.type.includes("connection")) {
			return reducer[action.type](state, action);
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { connectionStore, ConnectionProvider };
