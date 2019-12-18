import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }  

  componentDidMount() {
    this.timerID = setInterval( () => 
      this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return (
      <div> 
        <h1 id="clock-label">Clock </h1>
        <div className="clock"> 
          <ul className="clock-header">
            <li>Time: </li>
            <li>Date: </li>
          </ul>
          <ul className="clock-content">
            <li>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()} PDT</li>
            <li>{this.state.time.toDateString()}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Clock;