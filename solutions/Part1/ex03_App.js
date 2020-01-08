import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

class App extends Component
{
  render()
  {
    return (
      <View>
        <View style={styles.tabBar}>
          <Text style={styles.tabBarText}>Dashboard</Text>
        </View>
        <View>
          <Text>Greeting</Text>
        </View>
        <View>
          <Text>Leaderboard</Text>
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
    )
  }
}

const styles = {
  tabBar: {
    backgroundColor: '#21252b',
    padding: '5%'
  },
  tabBarText: {
    color: '#E0E6ED',
    fontSize: 20,
    fontWeight: 'bold'
  }
}

export default App;