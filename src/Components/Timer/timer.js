import React, { Component } from "react";
import start from '../img/buttons/play.png';
import pause from '../img/buttons/pause.png';
import stop from '../img/buttons/stop.png';
import timer from '../img/buttons/stopwatch.png';

class Timer extends Component {
    state = {
        count: Math.round(this.props.time / 60),
        start: false,
        width: 100,
        change: (100 / Math.round(this.props.time / 60)).toFixed(4)
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.start) {
                if (this.state.count !== 0) {
                    this.props.onTick(this.state);
                    this.startTime();
                    this.changeCount();
                    this.changeWidth();
                }
            } else {
                this.pauseTime();
            }
        }, 1000);
    }

    startTime = () => {
        this.setState({
            start: true
        });
    }

    reset = () => {
        this.setState({
            count: Math.round(this.props.time / 60),
            start: false,
            width: 100,
            change: (100 / Math.round(this.props.time / 60)).toFixed(4)
        });
    }

    pauseTime = () => {
        this.setState({
            start: false,
            count: this.state.count
        });
    }

    changeCount = () => {
        this.setState({ count: this.state.count - this.props.step })
    }

    changeWidth = () => {
        this.setState({
            width: (this.state.width - this.state.change * this.props.step)
        })
    }




    render() {
        return (
            <div className="timer">
                <h2>
                    <img src={timer}></img>
                </h2>
                <div className="buttons">
                    <button onClick={this.pauseTime}><img src={pause}></img></button>
                    <button onClick={this.reset}><img src={stop}></img></button>
                    <button onClick={this.startTime}><img src={start}></img></button>
                </div>
                <div className="indicator" style={{ width: this.state.width + '%' }} >
                     <div className="seconds">{this.state.count} seconds</div> 
                </div>
            </div>
        )
    }
}

export default Timer;
