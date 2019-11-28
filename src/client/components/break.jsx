import React from "react";

function Break(props) {
    return (
        <div>
            <section>
                <button type={"button"}>{"moins"}</button>
                <p>{props.Break}</p>
                <button type={"button"}>{"plus"}</button>
            </section>
            <section>
                <h2>{"Temps de pause"}</h2>
            </section>
        </div>
    );
}

export default Break;
