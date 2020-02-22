import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/app/app";
import { ConnectionProvider } from "./stores/connection/store";
ReactDOM.render(
	<ConnectionProvider>
		<App />
	</ConnectionProvider>,
	document.getElementById("root")
);
