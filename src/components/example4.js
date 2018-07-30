import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";
import comFunc from "../common/comFunc";
import { defaultThunk } from "../common/defaultThunk";

//export default class Example4 extends Thunk {
export default class Example4 extends defaultThunk {
    constructor(myObserved) {
        super();
        this.myObserved = myObserved;
        this.state = JSON.stringify(this.myObserved);
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
                id : "abc"
            },
            [
                h(
                    "h1",
                    {
                        id: this.myObserved.status,
                        style: {
                            color: this.myObserved.color
                        }
                    },
                    "Hello, it's you, status = " + this.myObserved.status
                ),
                h(
                    "button",
                    {
                        id: "bcd",
                        type: "button",
                        onclick: e => { Object.assign(this.myObserved, { color:new comFunc().randomColor(), status: ++this.myObserved.status})}
                        //onclick: e => {console.log('ccc')}
                    },
                    "Test observer"
                )
            ]
        )
    }
}