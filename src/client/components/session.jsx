import React from "react";

function Session(props) {
    return (
        <div>
            <section>
                <button type={"button"}>{"moins"}</button>
                <p>{props.Session}</p>
                <button type={"button"}>{"plus"}</button>
            </section>
            <div>
                <h2>{"Temps de session"}</h2>
            </div>
        </div>
    );
}
export default Session;
