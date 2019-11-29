import React from "react";

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
        this.stop = this.stop.bind(this);
        this.restart = this.restart.bind(this);
    }

    play() {
        const IntervalId = setInterval(this.DecreaseTimer, 1000);
        this.setState({
            IntervalId,
        });
    }
    stop() {
        clearInterval(this.state.IntervalId);
    }
    restart() {
        this.stop();
        this.props.ResetTimer();
        this.setState({
            TimerSeconde: 0,
        });
    }

    DecreaseTimer() {
        switch (this.state.TimerSeconde) {
            case 0:
                if (this.props.TimerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                        });
                        this.props.ToggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true,
                        });
                        this.props.ToggleInterval(this.state.isSession);
                    }
                }
                this.props.UpdateTimerMinute();
                this.setState({
                    TimerSeconde: 59,
                });
                break;
            default:
                this.setState(prevState => ({
                    TimerSeconde: prevState.TimerSeconde - 1,
                }));
                break;
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
                        ? `0${this.state.TimerSeconde}`
                        : this.state.TimerSeconde}
                </span>
                <section className={"actions-timer"}>
                    <button type={"button"} onClick={() => this.play()}>
                        {"Play"}
                    </button>
                    <button type={"button"} onClick={() => this.stop()}>
                        {"Stop"}
                    </button>
                    <button type={"button"} onClick={() => this.restart()}>
                        {"Restart"}
                    </button>
                </section>
            </section>
        );
    }
}

export default Timer;
