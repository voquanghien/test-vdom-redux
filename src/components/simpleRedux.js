import { diff, patch, create, h } from "virtual-dom";
import comFunc from "../common/comFunc";
import { defaultThunk } from "../common/defaultThunk";

//export default class Example4 extends Thunk {
export default class SimRe extends defaultThunk {
    constructor() {
        super();
    }

    render(previous) {
        if (previous) {
            console.log(previous.state);
        }
        console.log(this.state);
        if (!this.shouldUpdate(previous)) {
            console.log("should not update");
            return previous.vnode;
        }
        return h(
            "div", {
                id : "sim-redux"
            },
            [
                h(
                    "span",
                    {},
                    0
                ),
                h(
                    "button",
                    { 
                        id: "increase",
                        onclick: e=> {console.log('a')}
                    },
                    "+"
                ),
                h(
                    "button",
                    { 
                        id: "decrease",
                        onclick: e=> {console.log('b')}
                    },
                    "-"
                )
            ]
        )
    }
}