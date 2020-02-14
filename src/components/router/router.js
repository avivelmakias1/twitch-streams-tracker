import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./private-route";
import Landing from "../landing/landing";
import Authenticator from "../authenticator/authenticator";
import Search from "../search/search";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/auth/twitch/callback"}>
					<Authenticator />
				</Route>
				<PrivateRoute path={"/search"}>
					<Search />
				</PrivateRoute>
				<Route path={"/"}>
					<Landing />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
