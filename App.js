import React, { Component } from 'react'
import { View, Button } from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';

const customStyle = {
  hasEventCircle: {
    backgroundColor: 'yellow',
  },
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dates: []
    }

    this.formatDate = this.formatDate.bind(this);
    this.hasEvent = this.hasEvent.bind(this);
    this.toggleEvent = this.toggleEvent.bind(this);
  }

  toggleEvent(date) {
    date = this.formatDate(date);
    if (!this.hasEvent(date)) this.setState({ 
      dates: [...this.state.dates, date] 
    })
    else {
      const idx = this.state.dates.indexOf(date)
      this.setState({
        dates: this.state.dates.slice(0, idx).concat(this.state.dates.slice(idx + 1))
      });
    }
  }

  formatDate(date) {
    return date.split("T")[0];
  }

  hasEvent(date) {
    return this.state.dates.indexOf(date) === -1 ? false : true;
  }

  render(){
    return (
      <View>
        <Calendar 
        weekStart={0}
        showEventIndicators={true}
        eventDates={this.state.dates}
        onDateSelect={this.toggleEvent}
        customStyle={customStyle}
      />
      <Button title="Schedule" onPress={() => { console.log(this.state.dates) }} />
      </ View>
    )
  }
}

