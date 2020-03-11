import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

const dimension = Dimensions.get("window");

class App extends Component
{
	render() {
		return (
			<View>
				<View style = { styles.tabBar }>
					<Text style = { styles.tabBarText }>Dashboard</Text>
				</View>
				<View>
					<Text>Greeting</Text>
				</View>
				<View>
					<Text>Leaderboard</Text>
				</View>
				<View>
					<Text>Events</Text>
				</View>
				<View>
					<Text>Committees</Text>
				</View>
				<View>
					<Text>Slack</Text>
				</View>
				<View>
					<Text>Website</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	tabBar: {
		backgroundColor: "#21252B",
		height: dimension.height * 0.1,
		justifyContent: "center",
		paddingLeft: "10%",
		borderColor: "black",
		borderStyle: "solid",
		borderBottomWidth: 2
	},
	tabBarText: {
		color: "#E0E6ED",
		fontSize: 20,
		fontWeight: "bold"
	}
}

export default App;