import React, { Component } from 'react';
import { View } from 'react-native';
import AllStudentsScreen from './AllStudentsScreen';
import CalendarScreen from './CalendarScreen';
import HomeScreen from './HomeScreen';
import NewStudentScreen from './NewStudentScreen';
import StudentScreen from './StudentScreen';
import TeacherScreen from './TeacherScreen'
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen },
  NewStudent: { screen: NewStudentScreen },
  Student: { screen: StudentScreen },
  AllStudents: { screen: AllStudentsScreen },
  Teacher: { screen: TeacherScreen }
});

export default App

