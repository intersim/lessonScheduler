import React, { Component } from 'react'
import { Alert } from 'react-native';
import Calendar from 'react-native-calendar'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dates: []
    }
  }

  render(){
    return (
      <Calendar 
        weekStart={0}
        onDateSelect={(date) => {
            this.setState({
              dates: [...this.state.dates, date]
            }, () => console.log(this.state.dates))
          }
        }
      />
    )
  }
}