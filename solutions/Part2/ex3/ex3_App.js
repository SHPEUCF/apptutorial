import React, { Component } from "react";
import Router from "./src/config/Router.js";

console.disableYellowBox = true;

class App extends Component
{
	render() {
		return (
			<Router />
		);
	}
}

export default App;