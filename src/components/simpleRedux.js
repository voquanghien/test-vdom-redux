import { diff, patch, create, h } from "virtual-dom";
import { INCREASE, DECREASE } from "../actions/types"
import { defaultThunk } from "../common/defaultThunk";

//export default class Example4 extends Thunk {
export default class SimRe extends defaultThunk {
    constructor(store) {
        super();
        this.store = store;
        this.state = { value: store.getState().counter }
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
                    this.state.value
                ),
                h(
                    "button",
                    { 
                        id: "increase",
                        onclick: e=> {this.store.dispatch({ type: INCREASE })}
                    },
                    "+"
                ),
                h(
                    "button",
                    { 
                        id: "decrease",
                        onclick: e=> {this.store.dispatch({ type: DECREASE })}
                    },
                    "-"
                )
            ]
        )
    }
}