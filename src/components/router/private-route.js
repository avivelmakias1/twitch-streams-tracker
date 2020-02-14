import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { store } from "../../store/store";

function PrivateRoute({ children, ...rest }) {
	const { state } = useContext(store);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				state.connection ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
