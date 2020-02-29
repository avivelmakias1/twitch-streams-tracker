import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as urls from "./urls";
import PrivateRoute from "./private-route";
import Landing from "../pages/landing/landing";
import Authenticator from "../pages/authenticator/authenticator";
import TrackStreams from "../pages/trackStreams/trackStreams";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={urls.authentication}>
					<Authenticator />
				</Route>
				<PrivateRoute path={urls.trackStreams}>
					<TrackStreams />
				</PrivateRoute>
				<Route path={urls.landing}>
					<Landing />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
