import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import {  ThemeProvider } from '@material-ui/core';
import theme from '../theme';

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
			<ThemeProvider theme={theme}>
				<div className={className}>{children}</div>
			</ThemeProvider>
		</Context.Provider>
	);
};
