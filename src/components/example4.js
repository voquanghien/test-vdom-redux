import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";
import comFunc from "../common/comFunc";

export default class Example4 extends Thunk {
    constructor(props) {
        super();
        this.color = props.color;
        this.status = props.status;
    }

    render() {
        return h(
            "div", {
                id : "abc"
            },
            [
                h(
                    "h1",
                    {
                        id: this.status,
                        style: {
                            color: this.color
                        }
                    },
                    "Hello, it's you, status = " + this.status
                ),
                h(
                    "button",
                    {
                        id: "bcd",
                        type: "button",
                        onclick: e => { window.gparam.color = new comFunc().randomColor(), console.log(window.gparam.color) }
                    },
                    "Test observer"
                )
            ]
        )
    }
}