import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";
import comFunc from "../common/comFunc";
import { defaultThunk } from "../common/defaultThunk";

//export default class Example4 extends Thunk {
export default class Example4 extends defaultThunk {
    constructor(myObserved) {
        super();
        this.myObserved = myObserved
    }

    render(previous) {
        if (!this.shouldUpdate(previous)) {
            console.log("bbb");
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
                        onclick: e => { Object.assign(this.myObserved , {color:new comFunc().randomColor()}), console.log(this.myObserved) }
                        //onclick: e => {console.log('ccc')}
                    },
                    "Test observer"
                )
            ]
        )
    }
}