import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const style = {
  input: {
    height: 50
  },
  view: {
    padding: 10
  }
}

export default class NewStudentScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      address: ''
    }
  }

  render() {
    return (
      <View style={style.view}>
        <TextInput style={style.input} placeholder="Name" onChangeText={name => this.setState({ name })} />
        <TextInput style={style.input} placeholder="Email" onChangeText={email => this.setState({ email })} />
        <TextInput style={style.input} placeholder="Address" onChangeText={address => this.setState({ address })} />
        <Text>Lesson Length (select here)</Text>
        <Text>Regular Day (select here)</Text>
        <Text>Regular Time (time picker here)</Text>
        <Button title="Submit" onPress={() => console.log(this.state)} />
      </View>
    )
  }
}
