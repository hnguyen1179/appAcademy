import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
        this.newInterval;
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.newInterval = setInterval(this.tick, 1000)
        return this.newInterval;
    }

    render() {
        const { time } = this.state;
        return (
            <div className="clock">
                <h1 className="clock-name">
                    Clock
                </h1>
                <div className="clock-content">
                    <p>
                        <a>Time </a> 
                        <a>{time.toLocaleTimeString('en-US')} PDT</a>
                    </p>
                    <p>
                        <a>Date </a> 
                        <a>{time.toDateString()}</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Clock;