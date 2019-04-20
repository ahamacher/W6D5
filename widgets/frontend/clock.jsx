import React from 'react';

class Clock extends React.Component{
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
        // this.date = new Date();
        this.tick = this.tick.bind(this);
    }

    tick() {
        // this.setState(this.state.date, () => new Date());
        this.setState({ date: new Date() });
    }

    componentDidMount(){
        setInterval(this.tick, 1000);
    }

    lessthan(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    displayString(){
        let seconds = this.state.date.getSeconds();
        let minutes = this.state.date.getMinutes();
        let hours = this.state.date.getHours();

        return `${this.lessthan(hours)}:${this.lessthan(minutes)}:${this.lessthan(seconds)} PDT`;
        
    }

    displayDate() {
        let year = this.state.date.getFullYear();
        let day = this.state.date.getDate();
        let month = this.state.date.toString().slice(4,8);
        let week = this.state.date.toString().slice(0,3);

        return `${week} ${month} ${day} ${year}`;
    }

    render() {
        return (
            <>
                <h1>Clock</h1>
                <h2>{this.displayString()}</h2>
                <h2>{this.displayDate()}</h2>
            </>
        )
    }
}

export default Clock;
