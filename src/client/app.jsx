import React from "react";
import Title from "./components/title";
import Session from "./components/session";
import Break from "./components/break";
import Timer from "./components/timer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Break: 5,
            Session: 25,
            TimerMinute: 25,
            BreakTimer: 5,
        };
        this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
        this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
        this.onDecreaseSession = this.onDecreaseSession.bind(this);
        this.onIncreaseSession = this.onIncreaseSession.bind(this);
    }

    onDecreaseBreak() {
        return this.setState(prevState => {
            let tmp;

            if (prevState.Break + 1 === 2) tmp = 60;
            else tmp = prevState.Break - 1;

            return {
                Break: tmp,
            };
        });
    }
    onIncreaseBreak() {
        return this.setState(prevState => {
            let tmp;

            if (prevState.Break + 1 > 60) tmp = 0;
            else tmp = prevState.Break + 1;

            return {
                Break: tmp,
            };
        });
    }

    onDecreaseSession() {
        return this.setState(prevState => {
            let tmp;

            if (prevState.Session + 1 === 2) tmp = 60;
            else tmp = prevState.Session - 1;

            return {
                Session: tmp,
                TimerMinute: prevState.Session - 1,
            };
        });
    }
    onIncreaseSession() {
        return this.setState(prevState => {
            let tmp;

            if (prevState.Session + 1 > 60) tmp = 0;
            else tmp = prevState.Session + 1;

            return {
                Session: tmp,
                TimerMinute: prevState.Session + 1,
            };
        });
    }
    render() {
        return (
            <div>
                <section>{"it 's work"} </section>
                <Title />
                <Session
                    Session={this.state.Session}
                    increaseSession={this.onIncreaseSession}
                    decreaseSession={this.onDecreaseSession}
                />
                <Break
                    Break={this.state.Break}
                    increaseBreak={this.onIncreaseBreak}
                    decreaseBreak={this.onDecreaseBreak}
                />
                <Timer
                    TimerMinute={this.state.TimerMinute}
                    BreakTimer={this.state.BreakTimer}
                />
            </div>
        );
    }
}
export default App;
