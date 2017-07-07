import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class StudentScheduleScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ padding: 20 }}>
        <Text>Currently Scheduled Lessons</Text>
      </View>
    )
  }
}
