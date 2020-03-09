import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends Component
{
	render() {
		return (
			<View>
				<View>
					<Text>Dashboard</Text>
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

export default App;