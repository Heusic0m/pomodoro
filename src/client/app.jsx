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
        };
    }

    render() {
        return (
            <div>
                <section>{"it 's work"} </section>
                <Title />
                <Session Session={this.state.Session} />
                <Break Break={this.state.Break} />
                <Timer TimerMinute={this.state.TimerMinute} />
            </div>
        );
    }
}

export default App;
