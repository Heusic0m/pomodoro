import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSession: true,
            TimerSeconde: 0,
        };
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
                    <button type={"button"}>{"Play"}</button>
                    <button type={"button"}>{"Stop"}</button>
                    <button type={"button"}>{"Restart"}</button>
                </section>
            </section>
        );
    }
}

export default Timer;
