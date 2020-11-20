import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/Provider";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider className="App">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);