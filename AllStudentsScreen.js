import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AllStudentsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return <View style={{ padding: 20 }}>
      <Text>All Students</Text>
      <Button title="Test Student" onPress={() => navigate('Student')} />
    </View>
  }
}