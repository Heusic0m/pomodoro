import React from "react";

function Break(props) {
    return (
        <div>
            <section>
                <button type={"button"} onClick={() => props.decreaseBreak()}>
                    {"moins"}
                </button>
                <p>{props.Break}</p>
                <button type={"button"} onClick={() => props.increaseBreak()}>
                    {"plus"}
                </button>
            </section>
            <section>
                <h2>{"Temps de pause"}</h2>
            </section>
        </div>
    );
}
export default Break;
