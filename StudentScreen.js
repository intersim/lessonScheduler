import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class StudentScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ padding: 20 }}>
        <Text>Name:</Text>
        <Text>Email:</Text>
        <Text>Address</Text>
        <Text>Lesson Length:</Text>
        <Text>Regular Lesson Time:</Text>

        <Button title="Scheduled Lessons" onPress={() => navigate('StudentSchedule')} />
        <Button title="Create Lessons" onPress={() => navigate('Calendar')} />
      </View>
    )
  }
}
