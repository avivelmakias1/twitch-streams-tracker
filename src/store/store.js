import React, { createContext, useReducer } from "react";

import twitchConnection from "./twitchConnection";

const initialState = { connection: null };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		if (action.type.includes("connection")) {
			return twitchConnection[action.type](state, action);
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
