import React, { Component } from 'react';
import { ScrollView, Picker, Text, TextInput, Button, DatePickerIOS, View } from 'react-native';

const style = {
  input: {
    height: 50
  },
  view: {
    padding: 20
  },
  picker: {
    width: "50%"
  }
}

export default class NewStudentScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      address: '',
      lessonLength: 30,
      lessonDay: 'sun',
      lessonTime: ''
    }
  }

  render() {
    const date = new Date();
    date.setHours(0,0,0,0);

    return (
      <ScrollView style={style.view}>
        <TextInput style={style.input} placeholder="Name" onChangeText={name => this.setState({ name })} />
        <TextInput style={style.input} placeholder="Email" onChangeText={email => this.setState({ email })} />
        <TextInput style={style.input} placeholder="Address" onChangeText={address => this.setState({ address })} />
        <Picker
          selectedValue={this.state.lessonLength}
          onValueChange={(itemValue, itemIndex) => this.setState({lessonLength: itemValue})}>
          <Picker.Item label="30 min" value={30} />
          <Picker.Item label="45 min" value={45} />
          <Picker.Item label="60 min" value={60} />
        </Picker>
        <View style={{flexDirection: 'row'}}>
          {/*<Text>Lesson Length (select here)</Text>*/}
          {/*<Text>Regular Day (select here)</Text>*/}
          <Picker
            style={style.picker}
            selectedValue={this.state.lessonDay}
            onValueChange={(itemValue, itemIndex) => this.setState({lessonDay: itemValue})}>
            <Picker.Item label="Sunday" value={"sun"} />
            <Picker.Item label="Monday" value={"mon"} />
            <Picker.Item label="Tuesday" value={"tue"} />
            <Picker.Item label="Wednesday" value={"wed"} />
            <Picker.Item label="Thursday" value={"thu"} />
            <Picker.Item label="Friday" value={"fri"} />
            <Picker.Item label="Saturday" value={"sat"} />
          </Picker>
          {/*<Text>Regular Time (time picker here)</Text>*/}
          <DatePickerIOS
            style={style.picker}
            date={date}
            mode="time"
            onDateChange={(date) => this.setState({ lessonTime: date })}
            minuteInterval={15}
          />
        </View>
        <Button title="Submit" onPress={() => console.log(this.state)} />
      </ScrollView>
    )
  }
}
