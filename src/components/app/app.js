import React from "react";

import Router from "../../router/router";
import { ConnectionProvider } from "../../stores/connection/store";

import "./app.css";

function App() {
	return (
		<div className="App">
			<ConnectionProvider>
				<Router />
			</ConnectionProvider>
		</div>
	);
}

export default App;
