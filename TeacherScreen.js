import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TeacherScreen extends Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text>Name</Text>
        <Text>Email</Text>
      </View>
    )
  }
}
