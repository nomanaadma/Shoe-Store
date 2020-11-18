import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/Provider";

ReactDOM.render(
	<Provider className="App">
		<App />
	</Provider>,
	document.getElementById("root")
);