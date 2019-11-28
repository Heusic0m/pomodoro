import React from "react";

function Session(props) {
    return (
        <div>
            <section>
                <button type={"button"} onClick={() => props.decreaseSession()}>
                    {"moins"}
                </button>
                <p>{props.Session}</p>
                <button type={"button"} onClick={() => props.increaseSession()}>
                    {"plus"}
                </button>
            </section>
            <div>
                <h2>{"Temps de session"}</h2>
            </div>
        </div>
    );
}
export default Session;
