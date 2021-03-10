import React from "react";
import "./BuyMeACoffee.css";

class BuyMeACoffee extends React.Component {
    constructor(props) {
        super(props);
        <script
            type="text/javascript"
            src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
            data-name="bmc-button"
            data-slug="repsreopening"
            data-color="#FFDD00"
            data-emoji="💪"
            data-font="Comic"
            data-text="Like this? Buy us a Protein Shake"
            data-outline-color="#000000"
            data-font-color="#000000"
            data-coffee-color="#ffffff"
        ></script>;
        let script = document.createElement("script");
        script.setAttribute("data-name", "BMC-Widget");
        script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
        script.setAttribute("data-id", "boulderproblems");
        script.setAttribute("data-description", "Thank you for your support!");
        script.setAttribute("data-message", "This web is free to use. Do you want to help supporting it?");
        script.setAttribute("data-color", "#FF5F5F");
        script.setAttribute("data-position", "right");
        script.setAttribute("data-x_margin", "18");
        script.setAttribute("data-y-margin", "18");
        script.async = true;
        //Call window on load to show the image
        script.onload = function () {
            var evt = document.createEvent("Event");
            evt.initEvent("DOMContentLoaded", false, false);
            window.dispatchEvent(evt);
        };
        this.script = script;
    }

    componentDidMount() {
        document.head.appendChild(this.script);
    }

    componentWillUnmount() {
        document.head.removeChild(this.script);
        document.body.removeChild(document.getElementById("bmc-wbtn"));
    }

    render() {
        return null;
    }
}
export default BuyMeACoffee;
