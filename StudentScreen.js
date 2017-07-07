import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class StudentScreen extends Component {
  render() {
    return (
      <View>
        <Text>Name:</Text>
        <Text>Email:</Text>
        <Text>Address</Text>
        <Text>Lesson Length:</Text>
        <Text>Regular Lesson Time:</Text>
      </View>
    )
  }
}
