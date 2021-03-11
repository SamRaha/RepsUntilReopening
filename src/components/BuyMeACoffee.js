// import React from "react";
// import "./BuyMeACoffee.css";

// class BuyMeACoffee extends React.Component {
//     constructor(props) {
//         super(props);
//         // <script
//         //     type="text/javascript"
//         //     src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
//         //     data-name="bmc-button"
//         //     data-slug="repsreopening"
//         //     data-color="#FFDD00"
//         //     data-emoji="💪"
//         //     data-font="Comic"
//         //     data-text="Like this? Buy us a Protein Shake"
//         //     data-outline-color="#000000"
//         //     data-font-color="#000000"
//         //     data-coffee-color="#ffffff"
//         // ></script>;
//         let script = document.createElement("script");
//         script.setAttribute("type", "text/javascript");
//         script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
//         script.setAttribute("data-name", "bmc-button");
//         script.setAttribute("data-slug", "resreopening");
//         script.setAttribute("data-color", "#FFDD00");
//         script.setAttribute("data-emoji", "💪");
//         script.setAttribute("data-font", "Comic");
//         script.setAttribute("data-text", "Like this? Buy us a Protein Shake");
//         script.setAttribute("data-outline-color", "#000000");
//         script.setAttribute("data-font-color", "#000000");
//         script.setAttribute("data-coffee-color", "#ffffff");
//         script.setAttribute("data-x_margin", "18");
//         script.setAttribute("data-y-margin", "18");
//         script.setAttribute("data-position", "right");
//         script.async = true;
//         // let script = document.createElement("script");
//         // script.setAttribute("data-name", "BMC-Widget");
//         // script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
//         // script.setAttribute("data-id", "boulderproblems");
//         // script.setAttribute("data-description", "Thank you for your support!");
//         // script.setAttribute("data-message", "This web is free to use. Do you want to help supporting it?");
//         // script.setAttribute("data-color", "#FF5F5F");
//         // script.setAttribute("data-position", "right");
//         // script.setAttribute("data-x_margin", "18");
//         // script.setAttribute("data-y-margin", "18");
//         // script.async = true;
//         //Call window on load to show the image
//         script.onload = function () {
//             var evt = document.createEvent("Event");
//             evt.initEvent("DOMContentLoaded", false, false);
//             window.dispatchEvent(evt);
//         };
//         this.script = script;
//     }

//     componentDidMount() {
//         document.head.appendChild(this.script);
//     }

//     componentWillUnmount() {
//         document.head.removeChild(this.script);
//         document.body.removeChild(document.getElementById("bmc-wbtn"));
//     }

//     render() {
//         return null;
//     }
// }
// export default BuyMeACoffee;

import React from "react";
import styled from "styled-components";

const Button = styled.a`
    line-height: 2;
    height: 70px;
    text-decoration: none;
    display: inline-flex;
    color: black;
    background-color: #fee440;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.7rem 1rem 0.7rem 1rem;
    font-size: 2rem;
    letter-spacing: 0.6px;
    box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
    transition: 0.3s all linear;
    font-family: cursive;
    &:hover,
    &:active,
    &:focus {
        text-decoration: none;
        box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
        opacity: 0.85;
        color: #ffffff;
    }
`;

const Image = styled.img`
    height: 34px;
    width: 35px;
    margin: auto;
    box-shadow: none;
    border: none;
    vertical-align: middle;
`;

const Text = styled.span`
    margin-left: 15px;
    font-size: 2rem;
    vertical-align: middle;
    color: black;
`;

function Coffee() {
    return (
        <Button target="_blank" href="https://www.buymeacoffee.com/agney">
            <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
            <Text>Like this? Buy us a protein shake</Text>
        </Button>
    );
}

export default Coffee;
