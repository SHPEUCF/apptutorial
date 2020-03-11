import React from "react";
import { Router, Stack, Scene, ActionConst } from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";
import Dashboard from "../Dashboard.js";
import Events from "../Events.js";
import Profile from "../Profile.js";
import More from "../More.js";

const RouterComponent = () => {
	const renderIcon = (focused, icon) => {
		return (
			<Icon
				name = { icon }
				size = { 25 }
				color = { focused ? "#FFC107" : "#FFF" }
			/>
		);
	}

	return (
		<Router>
			<Stack
				key = { "root" }
				tabs
				tabBarPosition = "bottom"
				type = { ActionConst.RESET }
				activeTintColor = "#E0E6ED"
				inactiveTintColor = "#C0CCDA"
				tabBarStyle = { styles.tabBar }
				tabBarIcon = { ({ focused, icon }) => renderIcon(focused, icon) }
			>
				<Scene
					key = "dashboard"
					hideNavBar
					component = { Dashboard }
					tabBarLabel = "Dashboard"
					icon = "ios-paper"
				/>
				<Scene
					key = "events"
					hideNavBar
					component = { Events }
					tabBarLabel = "Events"
					icon = "ios-calendar"
				/>
				<Scene
					key = "profile"
					hideNavBar
					component = { Profile }
					tabBarLabel = "Profile"
					icon = "ios-person"
				/>
				<Scene
					key = "more"
					hideNavBar
					component = { More }
					tabBarLabel = "More"
					icon = "ios-menu"
				/>
			</Stack>
		</Router>
	);
}

const styles = {
	tabBar: {
		backgroundColor: "#21252B",
		paddingTop: "1%"
	}
}

export default RouterComponent;