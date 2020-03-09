import React, { Component } from "react";
import { View, Text, Dimensions, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const dimension = Dimensions.get("window");

class App extends Component
{

	greeting() {
		const date = new Date();

		let day = date.getDate();
		let month = date.getMonth();
		let time = date.getHours();
		let greeting = (time < 12) ? "Good morning" : "Good evening";
		let months = ["January", "February", "March", "April", "May", "June", "July",
			"August", "September", "October", "November", "December"];
		
		return (
			<View style = { styles.greetingContainer }>
				<Text style = { [styles.textColor, { fontSize: 20 }] }>Hello, User.</Text>
				<Text style = { styles.textColor }>Today is { months[month] } { day }</Text>
			</View>
		);

	}

	render() {
		return (
			<View style = { styles.mainContainer }>
				<View style = { styles.tabBar }>
					<Text style = { styles.tabBarText }>Dashboard</Text>
				</View>
				{ this.greeting() }
				<View style = { styles.columnStyle }>
					<View style = { styles.dataContainer }>
						<Text style = { styles.titleText }>Leaderboard</Text>
						<Text style = { styles.textColor }>George is number 1</Text>
						<Text style = { styles.textColor }>Michael is number 2</Text>
						<Text style = { styles.textColor }>David is number 3</Text>
					</View>
					<View style = { styles.dataContainer }>
						<Text style = { styles.titleText }>Events</Text>
						<Text style = { styles.textColor }>PreCon is tomorrow</Text>
						<Text style = { styles.textColor }>Dog Conference is next week</Text>
					</View>
				</View>
				<View style = { styles.generalStyle }>
					<Text style = { styles.titleText }>Committees</Text>
					<Text style = { styles.textColor }>Coming soon!</Text>
				</View>
				<View style = { styles.generalStyle }>
					<Text style = { styles.titleText }>Slack</Text>
					<Icon
						color = "#FFC107"
						size = { 25 }
						name = "slack"
						onPress = { () => Linking.openURL("https://www.shpeucf.slack.com") }
					/>
				</View>
				<TouchableOpacity
					style = { styles.generalStyle }
					onPress = { () => Linking.openURL("https://www.shpeucf.com") }
				>
					<Text style = { styles.titleText }>Website</Text>
					<Text style = { styles.textColor }>Visit us at SHPEUCF!</Text>
				</TouchableOpacity>
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
	},
	mainContainer: {
		backgroundColor: "#0C0B0B",
		flex: 1
	},
	greetingContainer: {
		padding: "5%"
	},
	textColor: {
		color: "#FFF"
	},
	columnStyle: {
		flexDirection: "row",
		backgroundColor: "#21252B",
		margin: "3%",
		padding: "3%",
		borderRadius: 10
	},
	titleText: {
		color: "#FFF",
		fontWeight: "bold",
		fontSize: 20,
		paddingBottom: "5%"
	},
	dataContainer: {
		alignItems: "center",
		flex: 1,
		paddingLeft: "2%" ,
		paddingRight: "2%"
	},
	generalStyle: {
		backgroundColor: "#21252B",
		borderRadius: 10,
		padding: "3%",
		margin: "3%",
		alignItems: "center"
	}
}

export default App;