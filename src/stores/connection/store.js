import React, { createContext, useReducer, useCallback } from "react";

import reducer from "./reducer";

const initialState = { connection: null };
const connectionStore = createContext(initialState);
const { Provider } = connectionStore;

const ConnectionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		useCallback((state, action) => {
			if (action.type.includes("connection")) {
				console.log("called", state, action);
				return reducer[action.type](state, action);
			}
		}, []),
		initialState
	);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { connectionStore, ConnectionProvider };
