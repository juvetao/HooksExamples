//2 - useState
// Skapa en ny branch, i vilken du skriver en komponent (funktion och hooks) som
// renderar ett förnamn (lagra det i firstname). Rendera också ett inputfält och en
// knapp, och när knappen trycks ska värdet i inputfältet ersätta det som finns i
// variabeln firstname. Jobba med forms, onSubmit och glöm inte .preventDefault().
// Utveckling: Du kan också prova att ändra värdet direkt vid minsta förändring i
// inputfältet.

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Firstname(props) {
    const [firstname, setFirstname] = useState(props.firstname);

    const nameSubmitted = (e) => {
        e.preventDefault();
        setFirstname(e.target.firstname.value);
    };

    const nameChanger = (e) => {
        if (e.target.value.length > 3) {
            firstname = e.target.value;
            setFirstname(e.target.value);
        }
    };

    return (
        <div>
            <p>{firstname}</p>
            <form onSubmit={nameSubmitted}>
                <input
                    type="text"
                    name="firstname"
                    onChange={(e) => nameChanger(e)}
                />
                <input type="submit" value="Ändra namn" />
            </form>
        </div>
    );
}

ReactDOM.render(
    <Firstname firstname="Rune" />,
    document.getElementById("root")
);
