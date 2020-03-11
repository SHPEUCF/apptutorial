import React from "react";
import { Router, Stack, Scene, ActionConst } from "react-native-router-flux";
import Dashboard from "../Dashboard.js";
import Events from "../Events.js";
import Profile from "../Profile.js";
import More from "../More.js";

const RouterComponent = () => {
	return (
		<Router>
			<Stack
				key = "root"
				tabs
				tabBarPosition = "bottom"
				type = { ActionConst.RESET }
			>
				<Scene
					key = "dashboard"
					hideNavBar
					component = { Dashboard }
					tabBarLabel = "Dashboard"
				/>
				<Scene
					key = "events"
					hideNavBar
					component = { Events }
					tabBarLabel = "Events"
				/>
				<Scene
					key = "profile"
					hideNavBar
					component = { Profile }
					tabBarLabel = "Profile"
				/>
				<Scene
					key = "more"
					hideNavBar
					component = { More }
					tabBarLabel = "More"
				/>
			</Stack>
		</Router>
	);
}

export default RouterComponent;