import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
	shoes: []
}

export const Context = createContext(initialState);

export const Provider = ({ children, className }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return (
		<Context.Provider
			value={{ state }}
		>
			<div className={className}>{children}</div>
		</Context.Provider>
	);
};
