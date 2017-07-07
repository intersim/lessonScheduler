import React, { Component } from 'react';
import { Button, View, Picker } from 'react-native';

const students = [
  {id: 1, name: 'Test Student'}
];

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    Promise.resolve()
    .then(() => this.setState({
      students
    }));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button 
          title="Add New Student" 
          onPress={() => navigate('NewStudent')}
        />
        <Button 
          title="See All Students" 
          onPress={() => navigate('AllStudents')}
        />
        {/*<Button 
          title="Lesson Calendar" 
          onPress={() => navigate('Calendar')}
        />*/}
        {/*<Button 
          title="Student Profile" 
          onPress={() => navigate('Student')}
        />*/}
        <Button 
          title="My Info" 
          onPress={() => navigate('Teacher')}
        />
      </View>
    )
  }
}