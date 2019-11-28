import React from "react";
import Break from "./break";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSession: true,
            TimerSeconde: 0,
            IntervalId: 0,
        };

        this.play = this.play.bind(this);
        this.DecreaseTimer = this.DecreaseTimer.bind(this);
    }

    play() {
        let IntervalId = setInterval(this.DecreaseTimer, 1000);
        this.setState({
            IntervalId: IntervalId,
        });
    }
    DecreaseTimer() {
        switch (this.state.TimerSeconde) {
            case 0:
                this.props.UpdateTimerMinute();
                this.setState({
                    TimerSeconde: 59,
                });
                Break;
            default:
                this.setState(prevState => {
                    return {
                        TimerSeconde: prevState.TimerSeconde - 1,
                    };
                });
                Break;
        }
    }
    render() {
        return (
            <section>
                <section>
                    <h4>
                        {this.state.isSession === true ? "Session" : "Break"}
                    </h4>
                </section>
                <span>{this.props.TimerMinute}</span>
                <span> {":"} </span>
                <span>
                    {this.state.TimerSeconde === 0
                        ? "00"
                        : this.state.TimerSeconde < 10
                        ? `0${this.state.timerSeconde}`
                        : this.state.TimerSeconde}
                </span>
                <section className={"actions-timer"}>
                    <button type={"button"} onClick={this.play}>
                        {"Play"}
                    </button>
                    <button type={"button"} onClick={this.stop}>
                        {"Stop"}
                    </button>
                    <button type={"button"} onClick={this.restart}>
                        {"Restart"}
                    </button>
                </section>
            </section>
        );
    }
}

export default Timer;
