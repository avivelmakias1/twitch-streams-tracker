import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { connectionStore } from "../../stores/connection/store";

function PrivateRoute({ children, ...rest }) {
	const { state } = useContext(connectionStore);
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
